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
    const handlePlay = () => {
      try {
        vid.play();
      } catch (e) {}
    };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // play when visible
          handlePlay();
        } else {
          // pause when offscreen
          vid.pause();
        }
      });
    }, {
      threshold: 0.25,
    });
    obs.observe(vid);
    return () => obs.disconnect();
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
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src={ShowcaseVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
export default Showcase;