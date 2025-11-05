import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer.jsx";
import Skeleton from "../Components/UI/Skeleton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pinataImages from "../assets/pinatas/pinatasImages.jsx";
import Aos from "aos";
import "aos/dist/aos.css";

function PinatasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const imgFiles = pinataImages;

  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/pinatas/${file}.jpg`);
    return acc;
  }, {});

  const handleOpen = (index) => {
    setIsOpen(true);
    setCurrentPageIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentPageIndex(
        (prevIndex) => (prevIndex - 1 + imgFiles.length) % imgFiles.length
      );
    } else if (direction === "right") {
      setCurrentPageIndex((prevIndex) => (prevIndex + 1) % imgFiles.length);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Banner title="Welcome to the Piñatas page" />
      <Link to="/">
        <button className="back__btn">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
      {isLoading ? (
        <div className="gallery__container">
          {Object.values(images).map((image, index) => (
            <Skeleton key={index} width={300} height={250} borderRadius={50} />
          ))}
        </div>
      ) : (
        <GalleryCards
          images={Object.values(images)}
          imgFiles={imgFiles}
          isOpen={isOpen}
          currentIndex={currentPageIndex}
          onOpen={handleOpen}
          onClose={handleClose}
          onClick={handleClick}
          data-aos="fade-right" data-aos-delay="400"
        />
      )}
      {isOpen && (
        <div className="lightbox">
          <button
            className="lightbox__arrow--left click"
            onClick={() => handleClick("left")}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <div className="lightbox__content">
            <img
              className="modal__img"
              src={images[imgFiles[currentPageIndex]]}
              alt=""
              loading="lazy" 
              decoding="async"
            />
            <button className="lightbox__close--icon" onClick={handleClose}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
          <button
            className="lightbox__arrow--right click"
            onClick={() => handleClick("right")}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      )}
      <Footer />
    </>
  );
}

export default PinatasPage;
