import Landing from "../Components/Landing";
import Showcase from "../Components/Showcase";
import CategoryPreview from "../Components/CategoryPreview";
import shirt1 from "../assets/shirts/shirts6.webp";
import shirt2 from "../assets/shirts/shirts4.webp";
import pin1 from "../assets/pinatas/pin1.webp";
import pin2 from "../assets/pinatas/pin14.webp";
import gar1 from "../assets/garlands/gar2.webp";
import gar2 from "../assets/garlands/gar4.webp";
import decor1 from "../assets/decor/decor11.webp";
import decor2 from "../assets/decor/decor10.webp";

// Home-page categories as data: add one here and it appears with the same layout.
const categories = [
  {
    id: "Shirts",
    title: "Shirts",
    to: "/Shirts",
    linkLabel: "See more shirts",
    images: [
      { src: shirt1, alt: "Set of custom Halloween shirts" },
      { src: shirt2, alt: "Custom printed shirt designs" },
    ],
  },
  {
    id: "Pinatas",
    title: "Piñatas",
    to: "/Pinatas",
    linkLabel: "See more piñatas",
    images: [
      { src: pin1, alt: "Two handmade flower piñatas" },
      { src: pin2, alt: "Handmade Stitch character piñata" },
    ],
  },
  {
    id: "Garlands",
    title: "Garlands",
    to: "/Garlands",
    linkLabel: "See more garlands",
    images: [
      { src: gar1, alt: "Balloon garland gift basket" },
      { src: gar2, alt: "Balloon garland party backdrop" },
    ],
  },
  {
    id: "Decorations",
    title: "Decorations",
    to: "/Decorations",
    linkLabel: "See more decorations",
    images: [
      { src: decor1, alt: "Custom party decoration" },
      { src: decor2, alt: "Custom labeled party favors" },
    ],
  },
];

function Home() {
  return (
    <>
      <Landing />
      <Showcase />
      <div className="categories">
        {categories.map((category) => (
          <CategoryPreview key={category.id} {...category} />
        ))}
      </div>
    </>
  );
}

export default Home;
