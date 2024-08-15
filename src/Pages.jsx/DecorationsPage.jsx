import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import GalleryCards from "../Components/GalleryCards";

function DecorationsPage() {
  const imgFiles = [
    "decor1",
    "decor2",
    "decor3",
    "decor4",
    "decor5",
    "decor6",
    "decor7",
    "decor8",
    "decor9",
    "decor10",
    "decor11",
    "decor12",
    "decor13",
    "decor14",
    "decor15",
    "decor16",
    "decor17",
    "decor18",
    "decor19",
    "decor20",
  ];

  const images = imgFiles.reduce((acc, file) => {
    acc[file] = require(`../assets/decor/${file}.jpg`);
    return acc;
  }, {});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Banner title="Decorations" />
      <h1 className="pages__header">Welcome to the Decorations page</h1>
      <GalleryCards images={Object.values(images)} />
      <Footer />
    </>
  );
}

export default DecorationsPage;
