import React from 'react'
import Card from './Card'

function Garlands() {
  return (
    <section id="Garlands">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Garlands</div>
        </div>
        <div className="card__container">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  )
}

export default Garlands