import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import "../styles/_navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      </NavLink>
      <NavLink to="/">Accueil</NavLink>
      <NavLink to="/about">A Propos</NavLink>
    </nav>
  );
}

export default Navbar;
