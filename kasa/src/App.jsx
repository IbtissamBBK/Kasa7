import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import "./components/Banner.css";
import AppartmentGrid from "./components/AppartmentGrid.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <AppartmentGrid />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
