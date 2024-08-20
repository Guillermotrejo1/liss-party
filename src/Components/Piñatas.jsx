import React, { useEffect } from "react";
import Card from "./Card";
import { Link, useLocation } from "react-router-dom";
import pin1 from "../assets/pinatas/pin1.jpg"
import pin2 from "../assets/pinatas/pin2.jpg"

function Piñatas() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    }, [location]);;

  return (
    <section id="Pinatas">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Piñatas</div>
        </div>
        <div className="card__container">
          <Card
            image={pin1}
            text="card1"
          />
          <Link to="/Pinatas">
            <button className="link__btn">See More</button>
          </Link>
          <Card
            image={pin2}
            text="card2"
          />
        </div>
      </div>
    </section>
  );
}

export default Piñatas;
