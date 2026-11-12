import { useEffect, useRef } from "react";
import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  DoubleSide,
  Mesh,
  MeshPhysicalMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from "three";

// Replaces Diamond.jsx, RubyDiamond.jsx and AmethystDiamond.jsx.
// Same gem shape, colors, lights and camera as before, but:
// - ONE canvas and ONE WebGL renderer draw all three gems (before: three of each)
// - the animation only runs while the gems are on screen
// - everything is cleaned up when you leave the home page (before: it kept running forever)
// - people who turn off animations get a still image

// Each gem is drawn in a 280x220 box, centered in its third of the canvas (like before)
const GEM_W = 280;
const GEM_H = 220;
const GAP = 8; // matches the old 8px grid gap between gems
const SPIN_PER_SECOND = 0.6; // before: 0.01 per frame (0.6/s on a 60Hz screen)

// Ruby, clear diamond, amethyst (left to right)
const GEMS = [
  { color: 0xe0115f, roughness: 0.1, transmission: 0.6, clearcoatRoughness: 0.1 },
  { color: 0xffffff, roughness: 0.05, transmission: 0.99, clearcoatRoughness: 0.01 },
  { color: 0x9966cc, roughness: 0.05, transmission: 0.95, clearcoatRoughness: 0.05 },
];

// prettier-ignore
const VERTICES = new Float32Array([
  -25, 50, 25,   25, 50, 25,   50, 0, 25,   0, -85, 25,   -50, 0, 25,   // front
  -25, 50, -25,  25, 50, -25,  50, 0, -25,  0, -85, -25,  -50, 0, -25,  // back
  0, 65, 0,      0, -100, 0,                                            // top, bottom tips
]);

// prettier-ignore
const INDICES = new Uint16Array([
  10, 0, 1,  10, 1, 6,  10, 6, 5,  10, 5, 0,  // top pyramid
  4, 0, 1,   4, 1, 2,   4, 2, 3,   4, 3, 0,   // front
  9, 5, 6,   9, 6, 7,   9, 7, 8,   9, 8, 5,   // back
  11, 3, 2,  11, 2, 7,  11, 7, 8,  11, 8, 3,  // bottom pyramid
  1, 2, 7,   1, 7, 6,   0, 5, 9,   0, 9, 4,   // sides
]);

function GemTrio() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setScissorTest(true);

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(VERTICES, 3));
    geometry.setIndex(new BufferAttribute(INDICES, 1));
    geometry.computeVertexNormals();

    const materials = GEMS.map(
      (gem) =>
        new MeshPhysicalMaterial({
          ...gem,
          metalness: 0.1,
          thickness: 0.5,
          clearcoat: 1,
          side: DoubleSide,
        })
    );

    // One scene and one camera; the gem swaps material for each of the three boxes
    const scene = new Scene();
    const diamond = new Mesh(geometry, materials[0]);
    diamond.scale.set(1.5, 1.5, 1.5);
    scene.add(diamond, new AmbientLight(0xffffff, 0.5));
    [
      [0, 0, 1000, 1.5], // front
      [0, 0, -1000, 0.8], // back
      [0, 1000, 0, 1.0], // top
    ].forEach(([x, y, z, intensity]) => {
      const light = new PointLight(0xffffff, intensity, 3000);
      light.position.set(x, y, z);
      scene.add(light);
    });

    const camera = new PerspectiveCamera(75, GEM_W / GEM_H, 0.1, 3000);
    camera.position.z = 400;

    // Work out each gem's box from the canvas size (set in CSS)
    let boxes = [];
    function resize() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false); // false = leave the CSS size alone
      const column = (width - GAP * 2) / 3;
      const size = Math.min(GEM_W, column);
      boxes = [0, 1, 2].map((i) => ({
        x: i * (column + GAP) + (column - size) / 2,
        w: size,
        h: Math.min(height, (size * GEM_H) / GEM_W),
      }));
    }

    function draw() {
      boxes.forEach((box, i) => {
        renderer.setViewport(box.x, 0, box.w, box.h);
        renderer.setScissor(box.x, 0, box.w, box.h);
        diamond.material = materials[i];
        renderer.render(scene, camera);
      });
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = null;
    let lastTime = null;

    function tick(time) {
      if (lastTime !== null) {
        // Spin by time, not by frame, so it's the same speed on 60Hz and 120Hz screens
        diamond.rotation.y -= ((time - lastTime) / 1000) * SPIN_PER_SECOND;
      }
      lastTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    }
    function start() {
      if (frame !== null || reduceMotion.matches) return;
      lastTime = null;
      frame = requestAnimationFrame(tick);
    }
    function stop() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    }

    // Draw one still frame right away (also what reduced-motion users see)
    diamond.rotation.y = -0.6;
    resize();
    draw();

    // Only animate while the gems are on screen
    let onScreen = false;
    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      onScreen ? start() : stop();
    });
    visibility.observe(canvas);

    const sizeWatcher = new ResizeObserver(() => {
      resize();
      draw();
    });
    sizeWatcher.observe(canvas);

    const onMotionChange = () => {
      if (reduceMotion.matches) stop();
      else if (onScreen) start();
    };
    reduceMotion.addEventListener("change", onMotionChange);

    // Leaving the home page: stop and free the GPU memory
    return () => {
      stop();
      visibility.disconnect();
      sizeWatcher.disconnect();
      reduceMotion.removeEventListener("change", onMotionChange);
      geometry.dispose();
      materials.forEach((material) => material.dispose());
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="gem-trio" />;
}

export default GemTrio;
