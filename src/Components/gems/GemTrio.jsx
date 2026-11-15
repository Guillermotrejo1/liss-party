import { useEffect, useRef } from "react";
import { WebGLRenderer } from "three";
import { createGemScene, GAP, GEM_H, GEM_W, SPIN_PER_SECOND } from "./gemScene";

// The live, spinning 3D gems. Loaded only after the page is idle (see HeroGems.jsx).
// - ONE canvas and ONE WebGL renderer draw all three gems
// - the animation only runs while the gems are on screen
// - everything is cleaned up when you leave the home page
// onReady: called after the first frame is drawn, so HeroGems can fade it in
// onError: called if this device can't do WebGL, so HeroGems keeps the still images
function GemTrio({ onReady, onError }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    let renderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (error) {
      onError?.(error);
      return undefined;
    }
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setScissorTest(true);

    const gems = createGemScene(renderer);

    // Work out each gem's box from the canvas size (set in CSS):
    // a third of the width each, up to 280x220, centered in its column
    let boxes = [];
    function resize() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      renderer.setSize(width, height, false); // false = leave the CSS size alone
      const column = (width - GAP * 2) / 3;
      const w = Math.min(GEM_W, column, (height * GEM_W) / GEM_H);
      const h = (w * GEM_H) / GEM_W;
      boxes = [0, 1, 2].map((i) => ({
        x: i * (column + GAP) + (column - w) / 2,
        y: (height - h) / 2,
        w,
        h,
      }));
    }
    function draw() {
      boxes.forEach((box, i) => gems.drawGem(i, box));
    }

    let frame = null;
    let lastTime = null;
    function tick(time) {
      if (lastTime !== null) {
        // Spin by time, not by frame, so it's the same speed on 60Hz and 120Hz screens
        gems.turntable.rotation.y -= ((time - lastTime) / 1000) * SPIN_PER_SECOND;
      }
      lastTime = time;
      draw();
      frame = requestAnimationFrame(tick);
    }
    function start() {
      if (frame !== null) return;
      lastTime = null;
      frame = requestAnimationFrame(tick);
    }
    function stop() {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    }

    // First frame at the same angle as the still images, so the swap is seamless
    resize();
    draw();
    onReady?.();

    // Only animate while the gems are on screen
    const visibility = new IntersectionObserver(([entry]) => {
      entry.isIntersecting ? start() : stop();
    });
    visibility.observe(canvas);

    const sizeWatcher = new ResizeObserver(() => {
      resize();
      draw();
    });
    sizeWatcher.observe(canvas);

    // Leaving the home page: stop and free the GPU memory
    return () => {
      stop();
      visibility.disconnect();
      sizeWatcher.disconnect();
      gems.dispose();
      renderer.dispose();
    };
    // onReady/onError are only needed once, on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <canvas ref={canvasRef} className="hero-gems__canvas" />;
}

export default GemTrio;
