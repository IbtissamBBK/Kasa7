import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import "./components/Footer.css";
import "./components/Navbar.css";
import Main from "./components/Main.jsx";

// Pages additionnelles
import Home from "./pages/Home.jsx";
import ApartmentDetails from "./pages/ApartmentDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main className='main'>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<ApartmentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      
      <Footer />
    </div>
  );
}

export default App;
