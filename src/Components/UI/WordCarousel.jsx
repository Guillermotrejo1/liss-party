import React, { useEffect, useState } from "react";

// Simple infinite-scrolling word carousel (no edge fades)
// - Pass an array of strings via `words`
// - Duplicates content to create a seamless loop
// - Respects prefers-reduced-motion
function WordCarousel({
  words = [
    "Piñatas",
    "Garlands",
    "Banners",
    "Shirts",
    "Center Pieces",
    "Stickers",
    "Stencils",
    "Cake Toppers",
    "Cupcake Toppers",
    "Invitations",
    "Goodie Bags",
  ],
  label = "Explore more",
  speedSeconds = 25,
}) {
  const sequence = [...words, ...words];

  // Inline CSS variable for speed control
  const style = { "--wc-speed": `${speedSeconds}s` };

  // Defer visibility until page load to avoid early flicker
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const show = () => requestAnimationFrame(() => setIsVisible(true));
    if (document.readyState === "complete") {
      show();
    } else {
      window.addEventListener("load", show, { once: true });
      return () => window.removeEventListener("load", show);
    }
  }, []);

  return (
    <div
      className={`word-carousel ${isVisible ? 'word-carousel--visible' : 'word-carousel--hidden'}`}
      aria-label={label}
      role="list"
      style={style}
    >
  <div className="word-carousel__wrapper">
    <div className="word-carousel__track">
      {sequence.map((w, i) => (
        <span className="word-carousel__item" role="listitem" key={`${w}-${i}`} >
          {w}
        </span>
      ))}
    </div>
    <div className="word-carousel__track">
      {sequence.map((w, i) => (
        <span className="word-carousel__item" role="listitem" key={`${w}-${i}`} >
          {w}
        </span>
      ))}
    </div>
  </div>
</div>
  );
}

export default WordCarousel;
