import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import Skeleton from "../Components/UI/Skeleton";

function ThemesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const imgFiles = [
    "theme1",
    "theme2",
    "theme3",
    "theme4",
    "theme5",
    "theme6",
  ];
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/themes/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false)
  }, []);
  
  return (
    <>
      <Banner title="Themes" />
      <h1 className="pages__header">Welcome to the Themes page</h1>
      {isLoading ? (
        <div className="gallery__container">
          {Object.values(images).map((image, index) => (
            <Skeleton
              key={index}
              width={300}
              height={200}
              borderRadius={50}
              style={{ margin: "10px" }}
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

export default ThemesPage;
