import React from 'react'
import Card from './Card'

function Decorations() {
  return (
    <section id="Decorations">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Decorations</div>
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

export default Decorations