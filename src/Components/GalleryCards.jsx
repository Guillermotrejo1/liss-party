import React from "react";

function GalleryCards({ images }) {
  return (
    <>
      <div className="gallery__container">
        {images.map((images, index) => (
          <div key={index} className="gallery__card--wrapper">
            <div className="gallery__card">
              <img className="gallery__img" src={images} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GalleryCards;
