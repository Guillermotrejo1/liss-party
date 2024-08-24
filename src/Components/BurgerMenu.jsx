import { Link, useLocation,} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function BurgerMenu() {
  const location = useLocation();
  
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");

  }

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav>
      <div className="burger__menu" data-aos="fade-in" data-aos-delay="300">
        <button className="burger__btn" onClick={openMenu}>
          <FontAwesomeIcon icon={faGem} />
        </button>
        <div className="menu__backdrop">
          <button
            className="burger__btn burger__btn--close"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/Pinatas">Piñatas</Link>
            </li>
            <li className="menu__list">
              <Link to="/Themes">Themes</Link>
            </li>
            <li className="menu__list">
              <Link to="/Garlands">Garlands</Link>
            </li>
            <li className="menu__list">
              <Link to="/Decorations">Decorations</Link>
            </li>
            <li className="menu__list">
              <Link to="/Shirts">Shirts</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default BurgerMenu;

// need to fix bugs with burger menu
// 1. when the backdrop is clicked i must have the diamond removed from screen
// 2. see how i can open and close menu with useState
// 3. choose if i want that backdrop design or change it
