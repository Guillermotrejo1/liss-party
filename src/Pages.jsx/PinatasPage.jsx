import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer.jsx";
import Skeleton from "../Components/UI/Skeleton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import pinataImages from "../assets/pinatas/pinatasImages.jsx"

function PinatasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const imgFiles = pinataImages
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/pinatas/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Banner title="Piñatas" />
      <h1 className="pages__header">Welcome to the Piñatas page</h1>
      <Link to="/">
      <button className="back__btn"> <FontAwesomeIcon icon={faArrowLeft}/> </button>
      </Link>
      {isLoading ? (
        <div className="gallery__container">
          {Object.values(images).map((image, index) => (
            <Skeleton
              key={index}
              width={300}
              height={200}
              borderRadius={50}
            />
          ))}
        </div>
      ) : (
        <GalleryCards images={Object.values(images)} />
      )}
      <Footer />
    </>
  );
}

export default PinatasPage;
