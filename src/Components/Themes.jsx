import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Themes() {
  return (
    <section id="Themes">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Themes</div>
        </div>
        <div className="card__container">
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczPcNsuvM9llDjsPBNqqjsaSHo_fYYqlnduGh7oz622HG1Fewm_0dlM39-gUKbSM0DpqpqcfUCN-r2jxW6s5iBgjTLadrYZACiW5FSCtsYSv9r0HxheDWhtmpd2rnYufVNJY8_srYIW0bcJrz07AOot8Cw=w776-h1033-s-no-gm?authuser=0" text="card1"/>
          <Link to="/Themes">
            <button className="link__btn">See More</button>
          </Link>
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczPzY1hEBbPGPS3QJ5r_ut1_neqAEJfYXzZIJbhP8SfyLG4Phl0eg7m3va1tgv2oqW40AJRlGvBk3w_nMt-p77sVM80WD4dD9KobU6Ky3pFS3df2t9FEuu3N4eclzlrRHqe4z4muHbnpkdB5rvOWBFOFKw=w776-h1033-s-no-gm?authuser=0" text="card2"/>
        </div>
      </div>
    </section>
  )
}

export default Themes