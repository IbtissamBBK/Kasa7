import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

// Pages additionnelles
import Home from "./pages/Home";
import ApartmentDetails from "./pages/ApartmentDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

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
