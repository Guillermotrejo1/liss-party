import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

// Photo grid + lightbox, shared by every gallery page.
// images: [{ id, src, alt }]
function Gallery({ images, label }) {
  const [openIndex, setOpenIndex] = useState(null);
  const closeRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const isOpen = openIndex !== null;
  const count = images.length;

  const open = (index, trigger) => {
    lastTriggerRef.current = trigger;
    setOpenIndex(index);
  };

  const close = useCallback(() => {
    setOpenIndex(null);
    // Return focus to the photo that opened the lightbox
    if (lastTriggerRef.current) lastTriggerRef.current.focus();
  }, []);

  const step = useCallback(
    (direction) => {
      setOpenIndex((i) => (i + direction + count) % count);
    },
    [count]
  );

  // Keyboard: Escape closes, arrow keys browse. Lock page scroll while open.
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  // If a filter shrinks the list while the lightbox is open, close it
  useEffect(() => {
    setOpenIndex(null);
  }, [images]);

  return (
    <>
      <ul className="gallery" aria-label={label}>
        {images.map((image, index) => (
          <li key={image.id} className="gallery__item">
            <button
              type="button"
              className="gallery__button"
              aria-haspopup="dialog"
              onClick={(e) => open(index, e.currentTarget)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${label}: photo ${openIndex + 1} of ${count}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            type="button"
            className="lightbox__btn lightbox__btn--prev"
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <figure className="lightbox__figure">
            <img src={images[openIndex].src} alt={images[openIndex].alt} />
            <figcaption className="lightbox__caption">
              {openIndex + 1} / {count}
            </figcaption>
            <button
              type="button"
              ref={closeRef}
              className="lightbox__btn lightbox__btn--close"
              onClick={close}
              aria-label="Close photo"
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </figure>

          <button
            type="button"
            className="lightbox__btn lightbox__btn--next"
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
    </>
  );
}

export default Gallery;
