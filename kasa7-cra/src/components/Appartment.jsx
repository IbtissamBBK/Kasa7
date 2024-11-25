import React from "react";
import "./Appartment.css";
import { Link } from "react-router-dom";

function Appartment() {
  return (
    <div className="apartment">
      <Link to="/apartment/:id">
        <div className="appartement__subtitle">Titre de la location</div>
      </Link>
    </div>
  );
}

export default Appartment;
