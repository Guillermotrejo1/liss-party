import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import Skeleton from "../Components/UI/Skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ShirtsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const imgFiles = [
    "shirts1",
    "shirts2",
    "shirts3",
    "shirts4",
    "shirts5",
    "shirts6",
    "shirts7",
    "shirts8",
    "shirts9",
    "shirts10",
  ];
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
