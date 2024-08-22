import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import theme6 from "../assets/themes/theme6.jpg"
import theme2 from "../assets/themes/theme2.jpg"

function Themes() {
  return (
    <section id="Themes" data-aos="fade-left" data-aos-delay="400">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Themes</div>
        </div>
        <div className="card__container">
          <Card image={theme6}/>
          <Link to="/Themes">
            <button className="link__btn">See More</button>
          </Link>
          <Card image={theme2}/>
        </div>
      </div>
    </section>
  )
}

export default Themes