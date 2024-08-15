import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useEffect } from "react";

function GarlandsPage() {
  const imgFiles = [
    "gar1",
    "gar2",
    "gar3",
    "gar4",
    "gar6",
    "gar7"
  ];

  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/garlands/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  
  return (
    <>
      <Banner title="Garlands" />
      <h1 className="pages__header">Welcome to the Garlands page</h1>
      <GalleryCards images={Object.values(images)} />
      <Footer />
    </>
  );
}

export default GarlandsPage;
