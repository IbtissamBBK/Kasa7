import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import "./components/Banner.css";
import AppartmentGrid from "./components/AppartmentGrid.jsx";
import "./components/AppartmentGrid.css";
import Footer from "./components/Footer.jsx";
import "./components/Footer.css";
import "./components/Navbar.css";
import "./components/Main.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Banner />
        <AppartmentGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
