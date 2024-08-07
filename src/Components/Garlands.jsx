import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'

function Garlands() {
  return (
    <section id="Garlands">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Garlands</div>
        </div>
        <div className="card__container">
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczOs5QwXbvZ91uFm3roHiYuVg9EmppqpiIJ75t93uKzdrOCZWLUvmimlo9uK3aC-XjXn5YD145koJon-mPyUt5x32X0jVxpSZmNt4RSsRcLEEV8-ZqtUx6J-Endh941Ph36D1JYIdX7YwpPdO_AJyF9SDA=w1835-h1033-s-no-gm?authuser=0" text="card1"/>
          <Link to="/Garlands">
            <button className="link__btn">See More</button>
          </Link>
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczNnrXevhjan36mTvaKGsqvOd2Cv1KQw_OzjPy2uOzvmAzrFNLI9hSV4vW-cj7H6S2mIxGv1x7qWmnVowsW8IR7HraPNyNTykH2wQIrZYk7GdqGbuuyGIEk8w_mxTIeP4zP41atIc6t_tK_56H5CLQR-Qw=w581-h1033-s-no-gm?authuser=0" text="card2"/>
        </div>
      </div>
    </section>
  )
}

export default Garlands