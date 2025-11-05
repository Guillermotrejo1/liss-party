import React, { useEffect, useRef } from "react";
import ShowcaseVideo from "../assets/showcase-video.mp4";

const Showcase = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion & save-data
    try {
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }
      if (navigator && navigator.connection && navigator.connection.saveData) {
        return;
      }
    } catch (e) {}

    const vid = videoRef.current;
    if (!vid) return;

    const handlePlay = async () => {
      try {
        await vid.play();
      } catch (e) {
        // autoplay blocked or other play error - ignore
      }
    };

    // Observe the container element (avoids false negatives when video has small bounding box)
    const container = vid.closest('.showcase__container') || vid.parentElement || document.querySelector('.showcase__container');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          handlePlay();
        } else {
          try { vid.pause(); } catch (e) {}
        }
      });
    }, { threshold: 0.1, rootMargin: '100px' });

    if (container) io.observe(container);

    return () => {
      io.disconnect();
      try { vid.pause(); } catch (e) {}
    };
  }, []);

  return (
    <div className="showcase__container">
      <video
        ref={videoRef}
        className="showcase__video"
        preload="metadata"
        poster="/poster.jpg"
        muted
        loop
        playsInline
        autoPlay
      >
        <source src={ShowcaseVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Showcase;