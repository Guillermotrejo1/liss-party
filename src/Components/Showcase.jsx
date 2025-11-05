import React, { useEffect, useRef, useState } from "react";
import ShowcaseVideoMp4 from "../assets/showcase-video.mp4";
import ShowcaseVideoWebm from "../assets/showcase-video.webm";
const Showcase = () => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
    const handleLoaded = () => {
      setLoading(false);
    };
    const handleError = (e) => {
      setError("Error loading video");
    };
    vid.addEventListener("loadeddata", handleLoaded);
    vid.addEventListener("error", handleError);
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
      threshold: 0.1,
    });
    obs.observe(vid);
    return () => {
      obs.disconnect();
      vid.removeEventListener("loadeddata", handleLoaded);
      vid.removeEventListener("error", handleError);
    };
  }, []);
  return (
    <div className="showcase__container">
      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      <video
        ref={videoRef}
        className="showcase__video"
        preload="metadata"
        poster="/poster.jpg"
        muted
        loop
        playsInline
      >
        <source src={ShowcaseVideoWebm} type="video/webm" />
        <source src={ShowcaseVideoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .showcase__video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .error {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: red;
        }
      `}</style>
    </div>
  );
};
export default Showcase;