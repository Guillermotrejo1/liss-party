import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faTimes } from "@fortawesome/free-solid-svg-icons";
import myLogo from "../assets/jem2.png";
import navLinks from "../data/navLinks";

// Replaces Nav.jsx + BurgerMenu.jsx: one header, one list of links,
// shown as a row on desktop and as a gem-button menu on phones.
function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the menu whenever the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header className="site-header">
      <Link to="/" className="site-header__logo">
        <img src={myLogo} alt="J.E.M. Creations home" width="72" height="72" />
      </Link>

      <nav className="site-nav" aria-label="Main">
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="site-nav-list"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faGem} />
        </button>

        <ul
          id="site-nav-list"
          className={`site-nav__list ${isOpen ? "site-nav__list--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className="site-nav__link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
