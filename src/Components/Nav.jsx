import React from 'react'

function Nav() {
  return (
    <nav>
        <div className="nav__container">
            <ul className='nav__links'>
                <li className='nav__list'>Piñatas</li>
                <li className='nav__list'>Themes</li>
                <li className='nav__list'>Garlands</li>
                <li className='nav__list'>Decorations</li>
                <li className='nav__list'>About</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav