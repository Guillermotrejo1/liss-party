import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function GalleryCards({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (image) => {
    setOpen(true);
    setCurrentIndex(images.indexOf(image));
  };

  const handleClose = () => setOpen(false);

  const handleArrowClick = (direction) => {
    const newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else if (newIndex >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(newIndex);
    }
  };


  return (
    <>
      <div className="gallery__container">
        {images.map((image, index) => (
          <div key={index} className="gallery__card--wrapper">
            <div className="gallery__card">
              <img
                className="gallery__img"
                src={image}
                alt=""
                onClick={() => handleOpen(image)}
              />
            </div>
          </div>
        ))}
      </div>
      {open && (
        <div
          className="lightbox"
          onClick={(e) =>
            e.target.classList.contains("lightbox") === false && handleClose()
          }
        >
          <div
            className="lightbox__arrow-left"
            onClick={() => handleArrowClick("left")}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div
            className="lightbox__content scrollbar-container"
            onClick={(e) =>
              e.target.classList.contains("lightbox") &&
              !e.target.closest(
                ".lightbox__arrow-left, .lightbox__arrow-right"
              ) &&
              handleClose()
            }
          >
            <img src={images[currentIndex]} key={currentIndex} alt="" />
          </div>
          <div
            className="lightbox__arrow-right"
            onClick={() => handleArrowClick("right")}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryCards;
