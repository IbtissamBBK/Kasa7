import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      </NavLink>
      <NavLink to="/">ACCUEIL</NavLink>
      <NavLink to="/about">A PROPOS</NavLink>
    </nav>
  );
}

export default Navbar;
