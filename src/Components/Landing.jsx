import React from "react";
// import introImage from "../assets/jemintro.png"
import introImage3 from "../assets/shirts/shirts11.jpg"
import myLogo from "../assets/jem2.png"
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";
import Contact from "./UI/Contact";
import RubyDiamond from "./RubyDiamond";
import Diamond from "./Diamond.jsx"
import AmethystDiamond  from "./AmethystDiamond.jsx"

function Landing() {
  const isOpen = useSelector((state) => state.modal.isOpen); // Select the isOpen state
const dispatch = useDispatch(); // Get the dispatch function

const handleOpen = () => {
dispatch(openModal()); // Dispatch the openModal action on button click
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
            <h2 className="header__quote">You think it i create it</h2>
          </div>
            <figure
              className="footer__logo--wrapper"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <img src={myLogo} alt="" className="logo" />
            </figure>
          <div
            className="diamond__wrapper"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <RubyDiamond/>
            <Diamond/>
            <AmethystDiamond/>
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
                  Hello! My name is <span className="highlighted">Lisseth</span>, and my goal is to bring your ideas to <span className="highlighted">life</span> while taking away the <span className="highlighted">stress and labor of decorating</span>, allowing you to focus on what matters most - <span className="highlighted">enjoying your special moments and creating unforgettable memories.</span>
                </p>
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
                <img className="jem__img" src={introImage3} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
