import PageHero from "../Components/PageHero";
import Gallery from "../Components/Gallery";
import shirtsImages from "../assets/shirts/shirtsImages.jsx";

const images = shirtsImages.map((file, index) => ({
  id: file.name,
  src: require(`../assets/shirts/${file.name}.${file.ext}`),
  alt: `Custom shirt design ${index + 1}`,
}));

function ShirtsPage() {
  return (
    <>
      <PageHero title="Shirts" intro="Personalized shirts for birthdays, families, businesses and everyday wear." />
      <Gallery images={images} label="Shirt photos" />
    </>
  );
}

export default ShirtsPage;
