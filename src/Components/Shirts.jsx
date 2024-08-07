import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Shirts() {
  return (
    <section id="Shirts">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Shirts</div>
        </div>
        <div className="card__container">
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczOO_nNrcoLNALEQgtATyVgjkGLnDexE-uJT6HfI1fuDJF80IYoc205TU4jYQrJIVXPPyPVd9zHUUsC2k508ucbCI4n0xj8mX5BjUWHx2UKtC2XxYQ6_z2fiBiEReA5JLPiW9JrAWtp9E3okgzqFtMAM9w=w581-h1033-s-no-gm?authuser=0" text="card1"/>
          <Link to="/Shirts">
            <button className="link__btn">See More</button>
          </Link>
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczOO_nNrcoLNALEQgtATyVgjkGLnDexE-uJT6HfI1fuDJF80IYoc205TU4jYQrJIVXPPyPVd9zHUUsC2k508ucbCI4n0xj8mX5BjUWHx2UKtC2XxYQ6_z2fiBiEReA5JLPiW9JrAWtp9E3okgzqFtMAM9w=w581-h1033-s-no-gm?authuser=0" text="card2"/>
        </div>
      </div>
    </section>
  )
}

export default Shirts