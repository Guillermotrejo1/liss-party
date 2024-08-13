import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GalleryCards from "../Components/GalleryCards";
import { useLocation } from "react-router-dom";

function DecorationsPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Decorations" />
      <h1 className="pages__header">Welcome to the Decorations page</h1>
      <GalleryCards />
      <Footer />
    </>
  );
}

export default DecorationsPage;
