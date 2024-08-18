import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import Skeleton from "../Components/UI/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import shirtsImages from "../assets/shirts/shirtsImages.jsx"

function ShirtsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const imgFiles = shirtsImages
  
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/shirts/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false)
  }, []);

  return (
    <>
      <Banner title="Shirts" />
      <h1 className="pages__header">Welcome to the Shirts page</h1>
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

export default ShirtsPage;

//return back to the Object.values and gallery component to see how we added the functinality of different images
