import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";

function ShirtsPage() {
  const imgFiles = [
    "shirts1",
    "shirts2",
    "shirts3",
    "shirts4",
    "shirts5",
    "shirts6",
    "shirts7",
    "shirts8",
    "shirts9",
    "shirts10",
  ];
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/shirts/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title="Shirts" />
      <h1 className="pages__header">Welcome to the Shirts page</h1>
      <GalleryCards images={Object.values(images)} />
      <Footer />
    </>
  );
}

export default ShirtsPage;

//return back to the Object.values and gallery component to see how we added the functinality of different images
