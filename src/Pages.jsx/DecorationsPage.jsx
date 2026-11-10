import { useMemo, useState } from "react";
import PageHero from "../Components/PageHero";
import Gallery from "../Components/Gallery";
import decorData, { categories } from "../assets/decor/decorImages.jsx";

const allImages = decorData.map((item) => ({
  id: item.id,
  category: item.category,
  src: require(`../assets/decor/${item.id}.webp`),
}));

// "CAKE TOPPERS" -> "Cake toppers" for readable alt text
const toLabel = (category) =>
  category.charAt(0) + category.slice(1).toLowerCase();

function DecorationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const images = useMemo(() => {
    const filtered =
      selectedCategory === "ALL"
        ? allImages
        : allImages.filter((img) => img.category === selectedCategory);
    return filtered.map((img, index) => ({
      ...img,
      alt: `${toLabel(img.category)} decoration ${index + 1}`,
    }));
  }, [selectedCategory]);

  return (
    <>
      <PageHero title="Decorations" intro="Cake toppers, center pieces, labels, props and party favors." />

      <div className="filters" role="group" aria-label="Filter decorations by type">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="filters__btn"
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "ALL" ? "All" : toLabel(category)}
          </button>
        ))}
      </div>

      <Gallery images={images} label="Decoration photos" />
    </>
  );
}

export default DecorationsPage;
