import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./components/Banner.css";
import { Routes, Route } from "react-router-dom";

import "./components/AppartmentGrid.css";
import Footer from "./components/Footer.jsx";
import "./components/Footer.css";
import "./components/Navbar.css";
import "./components/Main.css";

// Pages additionnelles
import Home from "./pages/Home.jsx";
import ApartmentDetails from "./pages/ApartmentDetails.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <div className="app">
      <Navbar /> 
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/apartment/:id" element={<ApartmentDetails />} /> 
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
