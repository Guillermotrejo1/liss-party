import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import decor1 from "../assets/decor/decor1.jpg"
import decor2 from "../assets/decor/decor2.jpg"

function Decorations() {
  return (
    <section id="Decorations" data-aos="fade-left" data-aos-delay="600">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Decorations</div>
        </div>
        <div className="card__container">
          <Card image={decor1} />
          <Link to="/Decorations">
            <button className="link__btn">See More</button>
          </Link>
          <Card image={decor2} />
        </div>
      </div>
    </section>
  )
}

export default Decorations