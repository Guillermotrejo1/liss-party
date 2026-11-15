// Saves still images of the hero gems, using the exact same code as the live gems
// (src/Components/gems/gemScene.js), so the two always match.
//
// Run this only after changing how the gems look:
//   npm install --no-save playwright      (once; it's not needed to build the site)
//   npx playwright install chromium       (once)
//   npm run gems:posters
//
// Output: src/Components/gems/stills/{ruby,diamond,amethyst}.webp (560x440, i.e. 2x for sharp screens)
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src/Components/gems/stills");
const require = createRequire(import.meta.url);

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch {
  console.error("Playwright isn't installed. Run: npm install --no-save playwright && npx playwright install chromium");
  process.exit(1);
}

// A tiny page that draws one gem at a time and hands back a WebP with a transparent background
const page = `<!doctype html>
<script type="importmap">{ "imports": { "three": "/three/three.module.js" } }</script>
<script type="module">
  import { WebGLRenderer } from "three";
  import { createGemScene, GEMS } from "/gemScene.js";
  const W = 560, H = 440;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setClearColor(0xffffff, 0);
  renderer.setPixelRatio(1);
  renderer.setSize(W, H, false);
  renderer.setScissorTest(true);
  const gems = createGemScene(renderer);
  window.stills = GEMS.map((gem, i) => {
    renderer.clear();
    gems.drawGem(i, { x: 0, y: 0, w: W, h: H });
    return { name: gem.name, data: canvas.toDataURL("image/webp", 0.9) };
  });
</script>`;

const files = {
  "/": [page, "text/html"],
  "/gemScene.js": [join(root, "src/Components/gems/gemScene.js"), "text/javascript"],
  "/three/three.module.js": [join(root, "node_modules/three/build/three.module.js"), "text/javascript"],
  "/three/three.core.js": [join(root, "node_modules/three/build/three.core.js"), "text/javascript"],
};

const server = createServer(async (req, res) => {
  const file = files[req.url];
  if (!file) return res.writeHead(404).end();
  const [source, type] = file;
  const body = req.url === "/" ? source : await readFile(source);
  res.writeHead(200, { "Content-Type": type }).end(body);
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch({
  // software WebGL, so the result is the same on every computer
  args: ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"],
});
try {
  const tab = await browser.newPage();
  tab.on("pageerror", (e) => console.error(e.message));
  await tab.goto(`http://localhost:${port}/`);
  const stills = await tab.waitForFunction(() => window.stills, null, { timeout: 30000 }).then((h) => h.jsonValue());
  await mkdir(outDir, { recursive: true });
  for (const { name, data } of stills) {
    const bytes = Buffer.from(data.split(",")[1], "base64");
    await writeFile(join(outDir, `${name}.webp`), bytes);
    console.log(`saved ${name}.webp (${(bytes.length / 1024).toFixed(1)} KB)`);
  }
} finally {
  await browser.close();
  server.close();
}
