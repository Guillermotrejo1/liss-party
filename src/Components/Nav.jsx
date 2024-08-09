import React from "react";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <ul className="nav__links">
          <a href="#Pinatas">
            <li className="nav__list">Piñatas</li>
          </a>
          <a href="#Themes">
            <li className="nav__list">Themes</li>
          </a>
          <a href="#Garlands">
            <li className="nav__list">Garlands</li>
          </a>
          <a href="#Decorations">
            <li className="nav__list">Decorations</li>
          </a>
          <a href="#Shirts">
            <li className="nav__list">Shirts</li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
