import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="logo" />
      </div>
      <a href="#">ACCUEIL</a>
      <a href="#">A PROPOS</a>
    </nav>
  );
}

export default Navbar;
