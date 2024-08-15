import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";

function ThemesPage() {
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
  }, []);
  
  return (
    <>
      <Banner title="Themes" />
      <h1 className="pages__header">Welcome to the Themes page</h1>
      <GalleryCards images={Object.values(images)} />
      <Footer />
    </>
  );
}

export default ThemesPage;
