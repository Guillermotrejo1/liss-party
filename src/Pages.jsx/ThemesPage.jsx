import React from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";

function ThemesPage() {
  return (
    <div>
      <Banner title="Themes" />
      <h1 className="pages__header">Welcome to the Themes page</h1>
      <GalleryCards />
      <Footer />
    </div>
  );
}

export default ThemesPage;
