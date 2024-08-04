import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faTimes } from "@fortawesome/free-solid-svg-icons";

function BurgerMenu() {
    function openMenu () {
        document.body.classList += " menu--open"
    }

    function closeMenu () {
        document.body.classList.remove("menu--open")
    }

  return (
    <nav>
      <div className="burger__menu">
        <button className="burger__btn" onClick={openMenu}>
          <FontAwesomeIcon icon={faGem} />
        </button>
        <div className="menu__backdrop">
            <button className="burger__btn burger__btn--close" onClick={closeMenu}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
          <ul className="nav__links menu__links">
            <li className="nav__list menu__list">
              <Link to="/Piñatas"></Link>Piñatas
            </li>
            <li className="nav__list menu__list">
              <Link to="/Themes"></Link>Themes
            </li>
            <li className="nav__list menu__list">
              <Link to="/Garlands"></Link>Garlands
            </li>
            <li className="nav__list menu__list">
              <Link to="/Decorations"></Link>Decorations
            </li>
            <li className="nav__list menu__list">
              <Link to="/About"></Link>About
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BurgerMenu;
