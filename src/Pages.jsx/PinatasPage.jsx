import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer.jsx";
import { useLocation } from "react-router-dom";
import pinata1 from "../assets/pinatas/pin1.jpg";

function PinatasPage() {
  const imgFiles = ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"];
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/pinatas/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title="Piñatas" />
      <h1 className="pages__header">Welcome to the Piñatas page</h1>
      <GalleryCards images={Object.values(images)} />
      <Footer />
    </>
  );
}

export default PinatasPage;
