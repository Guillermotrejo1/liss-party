import React, { useState } from "react";

function GalleryCards({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setOpen(true);
    setSelectedImage(image);
  };

  const handleClose = () => setOpen(false);

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
        <div className="lightbox" onClick={handleClose}>
          <div className="lightbox__content scrollbar-container">
            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryCards;
