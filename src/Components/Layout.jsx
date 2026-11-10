import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import Footer from "./Footer";
import Contact from "./UI/Contact";

// Every page shares this frame: skip link, header, main content, footer,
// and the contact modal (rendered once for the whole site).
function Layout() {
  const { pathname } = useLocation();

  // Start each page at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <Contact />
    </div>
  );
}

export default Layout;
