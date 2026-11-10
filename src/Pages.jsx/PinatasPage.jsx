import PageHero from "../Components/PageHero";
import Gallery from "../Components/Gallery";
import pinataImages from "../assets/pinatas/pinatasImages.jsx";

// Built once at module level so the list keeps the same identity between renders
const images = pinataImages.map((file, index) => ({
  id: file.name,
  src: require(`../assets/pinatas/${file.name}.${file.ext}`),
  alt: `Custom piñata ${index + 1}`,
}));

function PinatasPage() {
  return (
    <>
      <PageHero title="Piñatas" intro="Handmade piñatas in any shape, character or number." />
      <Gallery images={images} label="Piñata photos" />
    </>
  );
}

export default PinatasPage;
