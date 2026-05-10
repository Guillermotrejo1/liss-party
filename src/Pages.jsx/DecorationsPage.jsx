import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GalleryCards from "../Components/GalleryCards";
import Skeleton from "../Components/UI/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import decorData, { categories } from "../assets/decor/decorImages.jsx";

function DecorationsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Filter images based on selected category
  const filteredData = selectedCategory === "ALL" 
    ? decorData 
    : decorData.filter(item => item.category === selectedCategory);

  const imgFiles = filteredData.map(item => item.id);

  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/decor/${file}.webp`);
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
  }, []);

  return (
    <>
      <Banner title="Welcome to the Decorations page" />
      <Link to="/">
        <button className="back__btn">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>

      {/* Filter Buttons */}
      <div className="filter__container" style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '10px', 
        margin: '20px auto',
        maxWidth: '1200px',
        padding: '0 20px'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter__btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setIsLoading(false);
            }}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              fontWeight: selectedCategory === category ? '700' : '500',
              color: selectedCategory === category ? '#fff' : '#6107C8',
              backgroundColor: selectedCategory === category ? '#6107C8' : 'transparent',
              border: '2px solid #6107C8',
              borderRadius: '25px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = '#f0e6ff';
              }
            }}
            onMouseLeave={(e) => {
              if (selectedCategory !== category) {
                e.target.style.backgroundColor = 'transparent';
              }
            }}
          >
            {category}
          </button>
        ))}
      </div>

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
        />
      )}
      {isOpen && (
        <div className="lightbox">
          <button
            className="lightbox__arrow--left"
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
            className="lightbox__arrow--right"
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

export default DecorationsPage;
