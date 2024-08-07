import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages.jsx/Home";
import PinatasPage from "./Pages.jsx/PinatasPage";
import ThemesPage from "./Pages.jsx/ThemesPage"
import GarlandsPage from "./Pages.jsx/GarlandsPage"
import DecorationsPage from "./Pages.jsx/DecorationsPage"
import ShirtsPage from "./Pages.jsx/ShirtsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Pinatas" element={<PinatasPage/>}/>
          <Route path="/Themes" element={<ThemesPage />}/>
          <Route path="/Garlands" element={<GarlandsPage/>}/>
          <Route path="/Decorations" element={<DecorationsPage/>}/>
          <Route path="/Shirts" element={<ShirtsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
