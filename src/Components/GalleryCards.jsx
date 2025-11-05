
function GalleryCards({ images, imgFiles, isOpen, currentIndex, onOpen, onClose, onClick }) {
  return (
    <div className="gallery__container">
      {images.map((image, index) => (
        <div key={index} className="gallery__card--wrapper">
          <div className="gallery__card">
            <img
              className="gallery__img"
              src={image}
              loading="lazy"
              decoding="async"
              alt=""
              onClick={() => onOpen(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}




export default GalleryCards;
