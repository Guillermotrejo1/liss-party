import React, { useEffect } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import pin1 from "../assets/pinatas/pin1.jpg";
import pin2 from "../assets/pinatas/pin2.jpg";

function Piñatas() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section id="Pinatas" data-aos="fade-up" data-aos-delay="300">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Piñatas</div>
        </div>
        <div className="card__container">
          <div data-aos="flip-left">
            <Card image={pin1}/>
          </div>
          <Link to="/Pinatas">
            <button className="link__btn">See More</button>
          </Link>
          <div data-aos="flip-right">
            <Card image={pin2}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Piñatas;
