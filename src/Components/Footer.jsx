import React from "react";
import myLogo from "../assets/jem2.png";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="footer_container">
        <div className="footer__row">
          <figure
            className="footer__logo--wrapper"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <img
              src={myLogo}
              alt=""
              loading="lazy"
              decoding="async"
              className="footer__img"
            />
            <Link to="">
              <div className="arrow" onClick={handleScrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
              </div>
            </Link>
          </figure>
          <div className="footer__list">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="/Pinatas" className="footer__link">
              Piñatas
            </a>
            <a href="/Themes" className="footer__link">
              Party Creations
            </a>
            <a href="/Garlands" className="footer__link">
              Garlands
            </a>
            <a href="/Decorations" className="footer__link">
              Decorations
            </a>
            <a href="/Shirts" className="footer__link">
              Shirts
            </a>
            <a href="/Pricing" className="footer__link">
              Pricing
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; J.E.M. Creations 2024
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
