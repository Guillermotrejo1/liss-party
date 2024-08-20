import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
import shirt1 from "../assets/shirts/shirts1.jpg"
import shirts7 from "../assets/shirts/shirts7.jpg"

function Shirts() {
  return (
    <section id="Shirts">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Shirts</div>
        </div>
        <div className="card__container">
          <Card image={shirt1}/>
          <Link to="/Shirts">
            <button className="link__btn">See More</button>
          </Link>
          <Card image={shirts7}/>
        </div>
      </div>
    </section>
  )
}

export default Shirts