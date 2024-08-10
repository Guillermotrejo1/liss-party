import React from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";

function ShirtsPage() {
  return (
    <div>
      <Banner title="Shirts" />
      <h1 className="pages__header">Welcome to the Shirts page</h1>
      <GalleryCards />
      <Footer />
    </div>
  );
}

export default ShirtsPage;
