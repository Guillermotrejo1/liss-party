// Everything about how the hero gems look: shape, colors, reflections, camera.
// Plain JavaScript (no React) so two things can share it:
//   - GemTrio.jsx, which draws the live spinning gems on the home page
//   - scripts/render-gem-posters.mjs, which saves still images of the same gems
// Change the look here, then run `npm run gems:posters` so the stills match.
import {
  ACESFilmicToneMapping,
  BackSide,
  BufferGeometry,
  CanvasTexture,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Float32BufferAttribute,
  FrontSide,
  Group,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  Vector3,
} from "three";

// Each gem is drawn in a 280x220 box, centered in its third of the canvas
export const GEM_W = 280;
export const GEM_H = 220;
export const GAP = 8; // space between the three columns, in CSS pixels
export const SPIN_PER_SECOND = 0.18; // radians; one full turn takes about 35 seconds
export const START_ANGLE = -0.5; // the angle the still images are taken at
const TILT = 0.12; // tipped slightly toward the viewer so a sliver of the top shows

// Left to right
export const GEMS = [
  { name: "ruby", color: 0x9b0d2e, ior: 1.77 }, // deep "pigeon blood" red
  { name: "diamond", color: 0xc9ced8, ior: 2.42 }, // cool steel tint so the facets read darker
  { name: "amethyst", color: 0x5b2a86, ior: 1.54 }, // royal purple
];

// A round brilliant cut built from rings of points. Every other ring is turned half
// a step, which makes the triangular star and kite facets real gems have.
// (The old shape had overlapping triangles, which caused the flicker.)
function brilliantGeometry({ sides = 16, girdle = 50, table = 28, crown = 22, pavilion = 58 } = {}) {
  const rings = [
    { r: 0, y: crown, twist: 0 }, // center of the flat top (table)
    { r: table, y: crown, twist: 0 }, // edge of the table
    { r: (table + girdle) / 2 + 3, y: crown * 0.45, twist: 0.5 }, // star facets
    { r: girdle, y: 1.5, twist: 0 }, // girdle (widest part), top edge
    { r: girdle, y: -1.5, twist: 0 }, // girdle, bottom edge
    { r: girdle * 0.5, y: -pavilion * 0.5, twist: 0.5 }, // lower facets
    { r: 0, y: -pavilion, twist: 0 }, // bottom point (culet)
  ];
  const point = (ring, k) => {
    const angle = ((k + ring.twist) / sides) * Math.PI * 2;
    return new Vector3(Math.cos(angle) * ring.r, ring.y, Math.sin(angle) * ring.r);
  };

  const triangles = [];
  for (let n = 0; n < rings.length - 1; n++) {
    const A = rings[n];
    const B = rings[n + 1];
    const shift = B.twist - A.twist;
    for (let k = 0; k < sides; k++) {
      const a0 = point(A, k);
      const a1 = point(A, k + 1);
      if (A.r === 0) triangles.push([a0, point(B, k), point(B, k + 1)]);
      else if (B.r === 0) triangles.push([a0, a1, point(B, 0)]);
      else if (shift >= 0) triangles.push([a0, a1, point(B, k)], [point(B, k), a1, point(B, k + 1)]);
      else triangles.push([a0, a1, point(B, k + 1)], [point(B, k), a0, point(B, k + 1)]);
    }
  }

  const positions = [];
  for (const [p, q, r] of triangles) {
    const normal = new Vector3().subVectors(q, p).cross(new Vector3().subVectors(r, p));
    if (normal.lengthSq() < 1e-6) continue; // skip zero-area triangles
    // Wind every triangle so it faces outward (the gem is convex around the origin)
    const center = new Vector3().add(p).add(q).add(r);
    const ordered = normal.dot(center) >= 0 ? [p, q, r] : [p, r, q];
    ordered.forEach((v) => positions.push(v.x, v.y, v.z));
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals(); // unshared vertices => one flat normal per facet
  return geometry;
}

// What the gems "reflect": a painted canvas of random light, grey and dark patches,
// plus a few rainbow ones. Each flat facet reflects a different patch, so the gem
// flashes white, grey and black as it turns, with a hint of colored "fire".
function sparkleEnvironment(renderer) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const g = canvas.getContext("2d");
  let seed = 7; // fixed seed: the same pattern every time
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647;

  g.fillStyle = "#3b3546";
  g.fillRect(0, 0, 1024, 512);
  for (let i = 0; i < 260; i++) {
    const w = 20 + random() * 90;
    const h = 20 + random() * 90;
    const pick = random();
    const light = pick > 0.45 ? 200 + random() * 55 : pick > 0.2 ? 90 + random() * 60 : random() * 30;
    g.fillStyle = `rgb(${light},${light},${light})`;
    g.fillRect(random() * 1024, random() * 512, w, h);
  }
  const fire = ["#ff7ab6", "#7ad7ff", "#ffe27a", "#b48cff", "#8cffc1"];
  for (let i = 0; i < 40; i++) {
    g.fillStyle = fire[i % fire.length];
    g.fillRect(random() * 1024, random() * 512, 10 + random() * 30, 10 + random() * 30);
  }
  g.fillStyle = "#ffffff"; // bright band overhead, like a ceiling light
  g.fillRect(0, 0, 1024, 60);

  const texture = new CanvasTexture(canvas);
  texture.mapping = EquirectangularReflectionMapping;
  texture.colorSpace = SRGBColorSpace;
  const pmrem = new PMREMGenerator(renderer);
  const environment = pmrem.fromEquirectangular(texture).texture;
  pmrem.dispose();
  texture.dispose();
  return environment;
}

// Two layers instead of three.js "real glass" (transmission), which is much slower:
// the inside facets are drawn first as colored mirrors, then a clear shiny shell on top.
function twoLayerGem(geometry, { name, color, ior }) {
  const diamond = name === "diamond";
  const inside = new MeshPhysicalMaterial({
    color,
    metalness: 1,
    roughness: diamond ? 0.02 : 0.08,
    envMapIntensity: diamond ? 1.6 : 2.4,
    iridescence: diamond ? 1 : 0.3, // the rainbow sheen
    iridescenceIOR: 2,
    iridescenceThicknessRange: [250, 800],
    side: BackSide,
  });
  const shell = new MeshPhysicalMaterial({
    color,
    metalness: 0,
    roughness: 0,
    transparent: true,
    opacity: diamond ? 0.25 : 0.55,
    clearcoat: 1,
    clearcoatRoughness: 0,
    ior,
    specularIntensity: 1,
    envMapIntensity: 1.8,
    depthWrite: false,
    side: FrontSide,
  });
  const insideMesh = new Mesh(geometry, inside);
  const shellMesh = new Mesh(geometry, shell);
  insideMesh.renderOrder = 0;
  shellMesh.renderOrder = 1; // always drawn after the inside
  const gem = new Group();
  gem.add(insideMesh, shellMesh);
  gem.scale.setScalar(2.4);
  return { gem, materials: [inside, shell] };
}

// Builds the scene. Returns what the caller needs to draw and spin it, and dispose()
// to free the GPU memory afterwards.
export function createGemScene(renderer) {
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;

  const scene = new Scene();
  const environment = sparkleEnvironment(renderer);
  scene.environment = environment;
  const key = new DirectionalLight(0xffffff, 1.2);
  key.position.set(200, 500, 400);
  scene.add(key);

  const geometry = brilliantGeometry();
  const built = GEMS.map((settings) => twoLayerGem(geometry, settings));
  const turntable = new Group(); // tilt + spin apply to whichever gem is visible
  built.forEach(({ gem }) => turntable.add(gem));
  turntable.rotation.x = TILT;
  turntable.rotation.y = START_ANGLE;
  scene.add(turntable);

  const camera = new PerspectiveCamera(75, GEM_W / GEM_H, 0.1, 3000);
  camera.position.z = 400;

  // Draw gem i into a box of the canvas (x, y, w, h in CSS pixels, y from the bottom)
  function drawGem(i, box) {
    renderer.setViewport(box.x, box.y, box.w, box.h);
    renderer.setScissor(box.x, box.y, box.w, box.h);
    built.forEach(({ gem }, j) => (gem.visible = j === i));
    renderer.render(scene, camera);
  }

  function dispose() {
    geometry.dispose();
    built.forEach(({ materials }) => materials.forEach((m) => m.dispose()));
    environment.dispose();
  }

  return { turntable, drawGem, dispose };
}
