import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function ThemesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Themes" />
      <h1 className="pages__header">Welcome to the Themes page</h1>
      <GalleryCards />
      <Footer />
    </>
  );
}

export default ThemesPage;
