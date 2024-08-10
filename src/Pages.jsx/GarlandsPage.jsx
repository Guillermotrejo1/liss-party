import React from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";

function GarlandsPage() {
  return (
    <div>
      <Banner title="Garlands" />
      <h1 className="pages__header">Welcome to the Garlands page</h1>
      <GalleryCards />
      <Footer />
    </div>
  );
}

export default GarlandsPage;
