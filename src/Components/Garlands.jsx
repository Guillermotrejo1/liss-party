import Card from "./Card";
import { Link } from "react-router-dom";
import gar2 from "../assets/garlands/gar2.png";
import gar4 from "../assets/garlands/gar4.png";

function Garlands() {
  return (
    <section id="Garlands" data-aos="fade-up" data-aos-delay="400">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">~ Garlands ~</div>
        </div>
        <div className="card__container">
          <div data-aos="flip-left">
            <Card image={gar2} />
          </div>
          <Link to="/Garlands">
            <button className="link__btn">See More</button>
          </Link>
          <div data-aos="flip-left">
            <Card image={gar4} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Garlands;
