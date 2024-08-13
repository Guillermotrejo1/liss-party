import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";
import theme1 from "../assets/themes/theme1.jpg"

function ThemesPage() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Banner title="Themes" />
      <h1 className="pages__header">Welcome to the Themes page</h1>
      <GalleryCards pageImage={theme1} />
      <Footer />
    </>
  );
}

export default ThemesPage;
