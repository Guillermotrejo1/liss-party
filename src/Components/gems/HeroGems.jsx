import { lazy, Suspense, useEffect, useState } from "react";
import rubyStill from "./stills/ruby.webp";
import diamondStill from "./stills/diamond.webp";
import amethystStill from "./stills/amethyst.webp";

// The three gems at the top of the home page, loaded in two steps (what big product
// sites do with 3D):
//   1. Still images show right away. They're tiny, so the page is fast.
//   2. A few seconds after the page loads (or as soon as the visitor scrolls or taps),
//      the live three.js gems load in the background and fade in on top, starting
//      at the same angle, then begin to spin.
// People who turn off animations, or have data saver on, keep the still images.

// three.js is big (~130KB gzipped), so it's in its own file and only downloaded in step 2
// If that file can't load (flaky connection), keep the still images instead of crashing.
const GemTrio = lazy(() =>
  import("./GemTrio").catch(() => ({ default: () => null }))
);

const stills = [
  { src: rubyStill, name: "ruby" },
  { src: diamondStill, name: "diamond" },
  { src: amethystStill, name: "amethyst" },
];

// Should this visitor get the live 3D gems at all?
function wantsLiveGems() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (navigator.connection?.saveData) return false;
  return true;
}

// When to start the live gems. The stills look identical, so there's no rush: wait
// until the page has loaded plus a few seconds (so the text and photos get the phone's
// full attention first), or start right away if the visitor scrolls, taps or types.
const DELAY_AFTER_LOAD_MS = 4000;
const START_EARLY_ON = ["scroll", "pointerdown", "keydown", "touchstart"];

function useStartLater(enabled) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (!enabled) return undefined;
    let timeoutId;
    let idleId;
    const go = () => setReady(true);
    const goWhenIdle = () => {
      idleId = window.requestIdleCallback ? window.requestIdleCallback(go, { timeout: 2000 }) : null;
      if (!idleId) go();
    };
    const afterLoad = () => {
      timeoutId = window.setTimeout(goWhenIdle, DELAY_AFTER_LOAD_MS);
    };
    if (document.readyState === "complete") afterLoad();
    else window.addEventListener("load", afterLoad, { once: true });
    START_EARLY_ON.forEach((type) =>
      window.addEventListener(type, go, { once: true, passive: true })
    );
    return () => {
      window.removeEventListener("load", afterLoad);
      START_EARLY_ON.forEach((type) => window.removeEventListener(type, go));
      window.clearTimeout(timeoutId);
      if (idleId && window.cancelIdleCallback) window.cancelIdleCallback(idleId);
    };
  }, [enabled]);
  return ready;
}

function HeroGems() {
  const [live] = useState(wantsLiveGems);
  const loadLive = useStartLater(live);
  const [liveShowing, setLiveShowing] = useState(false);
  const [liveFailed, setLiveFailed] = useState(false);

  return (
    <div className={`hero-gems ${liveShowing ? "hero-gems--live" : ""}`}>
      <ul className="hero-gems__stills">
        {stills.map((gem) => (
          <li key={gem.name}>
            <img src={gem.src} alt="" width="280" height="220" decoding="async" fetchpriority="high"/>
          </li>
        ))}
      </ul>

      {loadLive && !liveFailed && (
        <Suspense fallback={null}>
          <GemTrio
            // wait one frame so the browser paints the canvas before the fade starts
            onReady={() => requestAnimationFrame(() => setLiveShowing(true))}
            onError={() => setLiveFailed(true)}
          />
        </Suspense>
      )}
    </div>
  );
}

export default HeroGems;
