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
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczMH4bw-LeU-9uHIQeAYBsn8sM_YtJF61Y6fFHABNOwZ1qg_KblksZPS0ftQnVze42WNV4mGB9czb_BnOoFTC-NErk64gLQ69OG7a7gFpXgtoEZQ9lumf7DR1dx_YusRQ8BuO-B5cvuTWsCzPw6yuoXWkw=w768-h1024-s-no-gm?authuser=0" text="card1"/>
          <button className="link__btn">See More</button>
          <Card imageUrl="https://lh3.googleusercontent.com/pw/AP1GczPeT2yrV7blBirT0tSq9aRWXHPuUugGb9hxa31wsoaM-YQYRHJyymtGqg89kqpByM0A-u8_citKF2-sBxe5-u0Bn8zpdfBC3diz1IkXUPsYSkGqgjMzcWRhqC495Nz5Mb_J257NeeDh9YYlz2Ik6_KMfA=w1373-h1033-s-no-gm?authuser=0"text="card2"/>
        </div>
      </div>
    </section>
  )
}

export default Decorations