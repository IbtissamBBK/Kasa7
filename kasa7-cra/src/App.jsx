import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import data from "./components/data/data.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Pages additionnelles
import Home from "./pages/Home";
import ApartmentDetails from "./pages/ApartmentDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<ApartmentDetails data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

