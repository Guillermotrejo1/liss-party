import React from 'react'
import Card from './Card'

function Themes() {
  return (
    <section id="Themes">
      <div className="header__container">
        <div className="header__description">
          <div className="header__title pinata__title">Themes</div>
        </div>
        <div className="card__container">
          <Card imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ33K5MMH8TZ2z9uXGamHXX6H-dAIRrNTKi8DYcICdfqLAWsQv0FwEHCzyYlkQ9gWuRwpfszaBjzfOOebsTstodThw-1G7pUK4IDQsAkrQbwwOu8SUZulVGZwz7XQ&usqp=CAc" text="card1"/>
          <Card imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ33K5MMH8TZ2z9uXGamHXX6H-dAIRrNTKi8DYcICdfqLAWsQv0FwEHCzyYlkQ9gWuRwpfszaBjzfOOebsTstodThw-1G7pUK4IDQsAkrQbwwOu8SUZulVGZwz7XQ&usqp=CAc" text="card2"/>
          <Card imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ33K5MMH8TZ2z9uXGamHXX6H-dAIRrNTKi8DYcICdfqLAWsQv0FwEHCzyYlkQ9gWuRwpfszaBjzfOOebsTstodThw-1G7pUK4IDQsAkrQbwwOu8SUZulVGZwz7XQ&usqp=CAc" text="card3"/>
          <Card imageUrl="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ33K5MMH8TZ2z9uXGamHXX6H-dAIRrNTKi8DYcICdfqLAWsQv0FwEHCzyYlkQ9gWuRwpfszaBjzfOOebsTstodThw-1G7pUK4IDQsAkrQbwwOu8SUZulVGZwz7XQ&usqp=CAc" text="card4"/>
        </div>
      </div>
    </section>
  )
}

export default Themes