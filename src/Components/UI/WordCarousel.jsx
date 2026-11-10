import React, { useEffect, useState } from "react";

// Infinite-scrolling word carousel.
// Screen readers get the list once, as plain text; the moving copies
// are decoration and hidden from assistive tech.
function WordCarousel({ words = [], label = "Explore more", speedSeconds = 25 }) {
  const sequence = [...words, ...words];
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
      className={`word-carousel ${isVisible ? "word-carousel--visible" : "word-carousel--hidden"}`}
      style={style}
    >
      <p className="sr-only">
        {label}: {words.join(", ")}.
      </p>
      <div className="word-carousel__wrapper" aria-hidden="true">
        {[0, 1].map((track) => (
          <div className="word-carousel__track" key={track}>
            {sequence.map((w, i) => (
              <span className="word-carousel__item" key={`${w}-${i}`}>
                {w}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordCarousel;
