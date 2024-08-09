import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="footer_container">
            <div className="footer__row">
                <figure className="footer__logo--wrapper">
                    <img src="logo192.png" alt="" className="footer__img" />
                </figure>
                <div className="footer__list">
                <a href="/" className='footer__link'>Home</a>
                <a href="/Pinatas" className='footer__link'>Piñatas</a>
                <a href="/Themes" className='footer__link'>Themes</a>
                <a href="/Garlands" className='footer__link'>Garlands</a>
                <a href="/Decorations" className='footer__link'>Decorations</a>
                <a href="/" className='footer__link footer__no-cursor' onClick={(e) => e.preventDefault()}>About</a>
                </div>
                <div className="footer__copyright">
                    Copyright &copy; J.E.M. Creations 2024
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer