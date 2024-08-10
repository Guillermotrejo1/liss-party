import React from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GalleryCards from "../Components/GalleryCards";

function DecorationsPage() {
  return (
    <div>
      <Banner title="Decorations" />
      <h1 className="pages__header">Welcome to the Decorations page</h1>
      <GalleryCards />
      <Footer />
    </div>
  );
}

export default DecorationsPage;
