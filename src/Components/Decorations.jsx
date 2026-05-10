import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import decor1 from "../assets/decor/decor11.webp"
import decor2 from "../assets/decor/decor10.webp"

function Decorations() {
  return (
    <section id="Decorations" data-aos="fade-up" data-aos-delay="400">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">~ Decorations ~</div>
        </div>
        <div className="card__container">
          <div data-aos="flip-left">
            <Card image={decor1} />
          </div>
          <Link to="/Decorations">
            <button className="link__btn">See More</button>
          </Link>
          <div data-aos="flip-left">
            <Card image={decor2} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Decorations