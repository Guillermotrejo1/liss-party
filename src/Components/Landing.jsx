import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import decoration1 from "../assets/decor/decor1.jpg"
function Landing() {
  return (
    <section id="Landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">J.E.M. Creations</h1>
            <h2 className="header__quote">You think it i create it</h2>
          </div>
          <div className="diamond__wrapper">
            <div className="diamond__ruby"></div>
            <div className="diamond"></div>
            <div className="diamond__amethyst"></div>
          </div>
          <div className="header__intro">
            <div className="header__wrapper">
              <div className="intro__wrapper">
                <h1 className="intro__title">Hi My name is Lisseth</h1>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae deserunt laboriosam consectetur magni corrupti,
                  assumenda quisquam, ipsa eos itaque debitis, molestiae ullam
                  dolor labore alias commodi animi iure dolorum doloribus!
                </p>
                <button className="requests">Let's create</button>
              </div>
              <figure className="img__wrapper">
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
