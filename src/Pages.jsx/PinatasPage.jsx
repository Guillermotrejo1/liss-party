import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import GalleryCards from "../Components/GalleryCards";
import Footer from "../Components/Footer.jsx";
import Skeleton from "../Components/UI/Skeleton.jsx";

function PinatasPage() {
  const [isLoading, setIsLoading] = useState(true);
  const imgFiles = ["pin1", "pin2", "pin3", "pin4", "pin5", "pin6", "pin7"];
  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/pinatas/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton width={50} height={50} borderRadius={100} />
          <Skeleton width={50} height={50} borderRadius={100} />
          <Skeleton width={50} height={50} borderRadius={100} />
          <Skeleton width={50} height={50} borderRadius={100} />
        </>
      ) : (
        <>
          <Banner title="Piñatas" />
          <h1 className="pages__header">Welcome to the Piñatas page</h1>
          <GalleryCards images={Object.values(images)} />
          <Footer />
        </>
      )}
    </>
  );
}

export default PinatasPage;
