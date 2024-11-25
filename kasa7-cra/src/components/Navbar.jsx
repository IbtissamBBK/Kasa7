import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="logo.png" alt="logo" />
      </div>
      <Link to="/">ACCUEIL</Link>
      <Link to="/about">A PROPOS</Link>
    </nav>
  );
}

export default Navbar;
