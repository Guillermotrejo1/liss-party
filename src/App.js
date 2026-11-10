import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Home from "./Pages.jsx/Home";
import PinatasPage from "./Pages.jsx/PinatasPage";
import ThemesPage from "./Pages.jsx/ThemesPage";
import GarlandsPage from "./Pages.jsx/GarlandsPage";
import DecorationsPage from "./Pages.jsx/DecorationsPage";
import ShirtsPage from "./Pages.jsx/ShirtsPage";
import PricingPage from "./Pages.jsx/PricingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import myLogo from "./assets/jem2.png";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

    const setFavicon = (href) => {
      const head = document.head || document.getElementsByTagName("head")[0];

      ["icon", "shortcut icon"].forEach((rel) => {
        let link = document.querySelector(`link[rel="${rel}"]`);
        if (!link) {
          link = document.createElement("link");
          link.setAttribute("rel", rel);
          head.appendChild(link);
        }
        link.setAttribute("type", "image/png");
        link.setAttribute("href", href);
      });

      let apple = document.querySelector('link[rel="apple-touch-icon"]');
      if (!apple) {
        apple = document.createElement("link");
        apple.setAttribute("rel", "apple-touch-icon");
        head.appendChild(apple);
      }
      apple.setAttribute("href", href);
    };

    setFavicon(myLogo);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps every page with the header, footer and contact modal */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Pinatas" element={<PinatasPage />} />
          <Route path="/Themes" element={<ThemesPage />} />
          <Route path="/Garlands" element={<GarlandsPage />} />
          <Route path="/Decorations" element={<DecorationsPage />} />
          <Route path="/Shirts" element={<ShirtsPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
