import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import garland2 from "../assets/garlands/gar2.jpg"

function GarlandsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Garlands" />
      <h1 className="pages__header">Welcome to the Garlands page</h1>
      <GalleryCards pageImage={garland2} />
      <Footer />
    </>
  );
}

export default GarlandsPage;
