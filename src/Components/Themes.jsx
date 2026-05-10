import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import theme6 from "../assets/themes/theme6.webp"
import theme2 from "../assets/themes/theme2.webp"

function Themes() {
  return (
    <section id="Themes" data-aos="fade-up" data-aos-delay="400">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">~ Party Creations ~</div>
        </div>
        <div className="card__container">
        <div data-aos="flip-left">
            <Card image={theme2} />
          </div>
          <Link to="/Themes">
            <button className="link__btn">See More</button>
          </Link>
          <div data-aos="flip-left">
            <Card image={theme6} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Themes