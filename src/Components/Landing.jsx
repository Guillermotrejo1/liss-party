import { useDispatch } from "react-redux";
import introImage from "../assets/shirts/hero.webp";
import { openModal } from "../redux/modalSlice";
import WordCarousel from "./UI/WordCarousel";
import HeroGems from "./gems/HeroGems";

const creations = [
  "Piñatas",
  "Garlands",
  "Banners",
  "Shirts",
  "Center Pieces",
  "Stickers",
  "Stencils",
  "Cake Toppers",
  "Cupcake Toppers",
  "Invitations",
  "Goodie Bags",
];

// Hero: brand + gems across the top, then the intro text and photo side by side.
// The layout lives in CSS grid areas (.hero in App.css).
function Landing() {
  const dispatch = useDispatch();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__brand hero__enter">
        <h1 id="hero-title" className="hero__title">
          J.E.M. Creations
        </h1>
        <p className="hero__tagline">You think it, I create it</p>
      </div>

      <div className="hero__gems" aria-hidden="true">
        <HeroGems />
      </div>

      <div className="hero__intro">
        <h2 className="hero__heading hero__enter">Welcome to JEM Creations!</h2>
        <p className="hero__text hero__enter">
          Hello! I'm <strong>Lisseth</strong>. What started as creating{" "}
          <strong>handmade pieces</strong> and decor for <strong>family</strong>{" "}
          events has grown into a full creative <strong>business</strong>. I now
          bring ideas to life through <strong>stress-free</strong> decorating,
          custom piñatas, and personalized shirts &mdash; perfect for birthdays,
          businesses, and everyday wear.
        </p>
        <p className="hero__text hero__enter">
          I also create <strong>professional</strong> items such as{" "}
          <strong>stickers, stencils and business cards</strong> to help{" "}
          <strong>brands</strong> stand out. I'm always{" "}
          <strong>learning</strong>, trying new <strong>techniques</strong>, and{" "}
          <strong>challenging</strong> myself so I can offer{" "}
          <strong>fresh</strong>, <strong>meaningful and beautifully</strong>{" "}
          crafted pieces for every client.
        </p>
        <WordCarousel words={creations} label="Custom creations I make" />
        <button
          type="button"
          className="btn-glow hero__cta"
          aria-haspopup="dialog"
          onClick={() => dispatch(openModal())}
        >
          Let's Create
        </button>
      </div>

      <figure className="hero__media hero__enter">
        <img
          src={introImage}
          alt="Custom Halloween shirt design made by J.E.M. Creations"
          width="570"
          height="600"
          decoding="async"
        />
      </figure>
    </section>
  );
}

export default Landing;
