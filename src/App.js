import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navigation from "./components/Navigation/Navigation";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Leagues from "./pages/Leagues";
import Players from "./pages/Players";

function App() {
  return (
    <div className="App">
      <h1>Football APP</h1>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/leagues" element={<Leagues />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
