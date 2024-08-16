import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import Skeleton from "../Components/UI/Skeleton";

function GarlandsPage() {
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false)
  }, []);
  
  
  return (
    <>
      <Banner title="Garlands" />
      <h1 className="pages__header">Welcome to the Garlands page</h1>
      {isLoading ? (
        <div className="gallery__container">
          {Object.values(images).map((image, index) => (
            <Skeleton
              key={index}
              width={300}
              height={200}
              borderRadius={50}
              style={{ margin: "10px" }}
            />
          ))}
        </div>
      ) : (
        <GalleryCards images={Object.values(images)} />
      )}
      <Footer />
    </>
  );
}

export default GarlandsPage;
