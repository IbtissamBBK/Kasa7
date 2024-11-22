import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="logo" />
      </div>
      <div>ACCUEIL</div>
      <div>A PROPOS</div>
    </nav>
  );
}

export default Navbar;
