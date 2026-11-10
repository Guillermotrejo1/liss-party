import PageHero from "../Components/PageHero";
import Gallery from "../Components/Gallery";
import garlandImages from "../assets/garlands/garlandImages.jsx";

const images = garlandImages.map((file, index) => ({
  id: file.name,
  src: require(`../assets/garlands/${file.name}.${file.ext}`),
  alt: `Balloon garland ${index + 1}`,
}));

function GarlandsPage() {
  return (
    <>
      <PageHero title="Garlands" intro="Balloon garlands, towers and gift baskets for every celebration." />
      <Gallery images={images} label="Garland photos" />
    </>
  );
}

export default GarlandsPage;
