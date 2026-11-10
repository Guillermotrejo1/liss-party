import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import myLogo from "../assets/jem2.png";
import navLinks from "../data/navLinks";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link to="/" className="site-footer__brand">
          <img
            src={myLogo}
            alt="J.E.M. Creations home"
            loading="lazy"
            decoding="async"
            width="160"
            height="160"
          />
        </Link>

        <nav className="site-footer__nav" aria-label="Footer">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="site-footer__top"
          onClick={handleScrollToTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>

        <p className="site-footer__copyright">
          <small>
            Copyright &copy; {new Date().getFullYear()} J.E.M. Creations
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
