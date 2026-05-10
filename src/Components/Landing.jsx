import React, { useEffect } from "react";
// import introImage from "../assets/jemintro.png"
import introImage3 from "../assets/shirts/hero.webp";
import myLogo from "../assets/jem2.png";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Contact from "./UI/Contact";
import RubyDiamond from "./RubyDiamond";
import Diamond from "./Diamond.jsx";
import AmethystDiamond from "./AmethystDiamond.jsx";
import WordCarousel from "./UI/WordCarousel";

function Landing() {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to scroll to diamond wrapper
    const scrollToDiamonds = () => {
      const diamondSection = document.querySelector(".diamond__wrapper");
      if (diamondSection) {
        const yOffset =
          diamondSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: yOffset,
          behavior: "instant", // Force immediate scroll without animation
        });
      }
    };

    // Execute scroll immediately
    scrollToDiamonds();
    const timer = setTimeout(scrollToDiamonds, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    dispatch(openModal());
  };

  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div
            className="header__description"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="header__title">J.E.M. Creations</h1>
            <h2 className="header__quote">YOU THINK IT I CREATE IT</h2>
          </div>
          <figure
            className="footer__logo--wrapper"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <img
              src={myLogo}
              loading="lazy"
              decoding="async"
              alt=""
              className="logo"
            />
          </figure>
          <div
            className="diamond__wrapper"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <RubyDiamond />
            <Diamond />
            <AmethystDiamond />
          </div>
          <div className="header__intro">
            <div className="header__wrapper">
              <div className="intro__wrapper">
                <h1
                  className="intro__title"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  Welcome to JEM creations!
                </h1>
                <p
                  className="intro__text"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                 Hello! I'm <span className="intro__highlight">Lisseth</span>. What started as creating <span className="intro__highlight">handmade pieces</span> and decor for <span className="intro__highlight">family</span> events
                 has grown into a full creative <span className="intro__highlight">business</span>. "I now bring ideas to life through <span className="intro__highlight">stress-free</span> decorating, custom piñatas, and personalized shirts &mdash; perfect for birthdays, businesses, and everyday wear."
                </p>
                <p
                  className="intro__text--snd"
                  data-aos="fade-right"
                  data-aos-delay="450"
                >
                 I also create <span className="intro__highlight">professional</span> items such as <span className="intro__highlight">stickers, stencil and business cards</span> to help <span className="intro__highlight">brands</span> stand out. I'm always <span className="intro__highlight">learning</span>, trying new <span className="intro__highlight">techniques</span>, and <span className="intro__highlight">challenging</span> myself so I can 
                 offer <span className="intro__highlight">fresh</span>, <span className="intro__highlight">meaningful and beautifully</span> crafted pieces for every client.
                </p>
                <WordCarousel
                  words={[
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
                  ]}
                  label="Available custom creation categories"
                />
                <button
                  className="request__btn"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  onClick={handleOpen}
                >
                  Let's Create
                </button>
                {isOpen && <Contact />}
              </div>
              <figure
                className="img__wrapper"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  className="jem__img"
                  src={introImage3}
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
