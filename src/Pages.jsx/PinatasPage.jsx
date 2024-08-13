import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer.jsx";
import { useLocation } from "react-router-dom";
import pinata1 from "../assets/pinatas/pin1.jpg"

function PinatasPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Piñatas" />
      <h1 className="pages__header">Welcome to the Piñatas page</h1>
      <GalleryCards pageImage={pinata1}/>
      <Footer />
    </>
  );
}

export default PinatasPage;
