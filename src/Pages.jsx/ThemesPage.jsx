import PageHero from "../Components/PageHero";
import Gallery from "../Components/Gallery";
import themesImages from "../assets/themes/themesImages.jsx";

const images = themesImages.map((name, index) => ({
  id: name,
  src: require(`../assets/themes/${name}.webp`),
  alt: `Themed party setup ${index + 1}`,
}));

function ThemesPage() {
  return (
    <>
      <PageHero title="Party Creations" intro="Full themed party setups, decorated from start to finish." />
      <Gallery images={images} label="Party creation photos" />
    </>
  );
}

export default ThemesPage;
