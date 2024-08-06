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
          <Card imageUrl="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTTHyTMUtCqf1TwYStyZGwgQ_6Z7LIRpdMPm4PCU1GtMxwxfrqHVQW118Y46JiVdqgrg2HjDWBiGpQqxruAifxbOzW9jwKbYlKP7OpNutn7nQ8" text="card1"/>
          <Card imageUrl="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS0TgxNmmRNgGZEZ_whonwEP1E5MU_ChxmLMdiR5nHNnIPxqYn1YNfUMJOTycliXwZX0TtoAXvLBUjYJ66ZXTWU3FH3oJFh868lnl9qHhE" text="card2"/>
          <Card imageUrl="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTPL-sZryuWs1ANvsOLUnDfvsUqC7ic-wpnBNDXt4ILcPAupefCA9tlQYtR32KWZr7N2Aw5WYEi9z5AOmRX3xIl6tUYDul88igptfGqxqvDUQzj6N385VvSdNjh6w&usqp=CAc" text="card3"/>
          <Card imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSHQD0bnzpedBCIYO0sUoryNmqOS05YMFfktMgxxNz6lxQXwhBvpaOeFmPDOVu1x43GjDAudJ2VYoe1ZAyTUzOqxHHttnnTwtQ3a0uW51nByUk0sH0D78NqxBkQMQYEGiP-c-NdaXk&usqp=CAc" text="card4"/>
        </div>
      </div>
    </section>
  )
}

export default Garlands