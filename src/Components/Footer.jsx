import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <div className="footer_container">
            <div className="footer__row">
                <figure className="footer__logo--wrapper">
                    <img src="logo192.png" alt="" className="footer__img" />
                </figure>
                <div className="footer__list">
                <Link to="/" className='footer__link'>Home</Link>
                <Link to="/" className='footer__link'>Piñatas</Link>
                <Link to="/" className='footer__link'>Themes</Link>
                <Link to="/" className='footer__link'>Garlands</Link>
                <Link to="/" className='footer__link'>Decorations</Link>
                <Link to="/" className='footer__link'>About</Link>
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