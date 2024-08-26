import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import shirt1 from "../assets/shirts/shirts1.jpg"
import shirt7 from "../assets/shirts/shirts7.jpg"

function Shirts() {
  return (
    <section id="Shirts" data-aos="fade-in" data-aos-delay="400">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">~ Shirts ~</div>
        </div>
        <div className="card__container">
        <div data-aos="flip-left">
            <Card image={shirt1} />
          </div>
          <Link to="/Shirts">
            <button className="link__btn">See More</button>
          </Link>
          <div data-aos="flip-left">
            <Card image={shirt7} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shirts