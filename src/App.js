import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages.jsx/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Piñatas" element={<Home/>}/>
          <Route path="/Themes" element={<Home/>}/>
          <Route path="/Garlands" element={<Home/>}/>
          <Route path="/Decorations" element={<Home/>}/>
          <Route path="/About" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
