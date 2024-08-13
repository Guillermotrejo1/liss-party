import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function ShirtsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Shirts" />
      <h1 className="pages__header">Welcome to the Shirts page</h1>
      <GalleryCards />
      <Footer />
    </>
  );
}

export default ShirtsPage;
