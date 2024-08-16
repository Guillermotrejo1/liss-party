import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GalleryCards from "../Components/GalleryCards";
import Skeleton from "../Components/UI/Skeleton";

function DecorationsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const imgFiles = [
    "decor1",
    "decor2",
    "decor3",
    "decor4",
    "decor5",
    "decor6",
    "decor7",
    "decor8",
    "decor9",
    "decor10",
    "decor11",
    "decor12",
    "decor13",
    "decor14",
    "decor15",
    "decor16",
    "decor17",
    "decor18",
    "decor19",
    "decor20",
  ];

  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/decor/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false)
  }, []);

  return (
    <>
      <Banner title="Decorations" />
      <h1 className="pages__header">Welcome to the Decorations page</h1>
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

export default DecorationsPage;
