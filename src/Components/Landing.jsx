import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import decoration1 from "../assets/decor/decor1.jpg"
function Landing() {
  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div className="header__description" data-aos="fade-up" data-aos-delay="200">
            <h1 className="header__title">J.E.M. Creations</h1>
            <h2 className="header__quote">You think it i create it</h2>
          </div>
          <div className="diamond__wrapper" data-aos="fade-in" data-aos-delay="200">
            <div className="diamond__ruby"></div>
            <div className="diamond"></div>
            <div className="diamond__amethyst"></div>
          </div>
          <div className="header__intro">
            <div className="header__wrapper">
              <div className="intro__wrapper">
                <h1 className="intro__title" data-aos="fade-right" data-aos-delay="300">Hi My name is Lisseth</h1>
                <p className="intro__text" data-aos="fade-right" data-aos-delay="400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae deserunt laboriosam consectetur magni corrupti,
                  assumenda quisquam, ipsa eos itaque debitis, molestiae ullam
                  dolor labore alias commodi animi iure dolorum doloribus!
                </p>
                <button className="request__btn" data-aos="fade-up" data-aos-delay="300">Let's create</button>
              </div>
              <figure className="img__wrapper" data-aos="fade-left" data-aos-delay="400">
                <img className="jem__img" src={decoration1} alt="" />
              </figure>
            </div>
          </div>
          <div className="display">
            <p className="display__text">Here's a display of some of my work</p>
            <div className="arrow">
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
