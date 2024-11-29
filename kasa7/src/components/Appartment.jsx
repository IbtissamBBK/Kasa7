import React from "react";
import { Link } from "react-router-dom";
import "./Appartment.scss";

function Appartment({ id, title, cover }) {
  return (
    <div className="apartment">
      <Link to={`/apartment/${id}`}>
        <img src={cover} alt={title} className="apartment__image" />
        <div className="apartment__subtitle">{title}</div>
      </Link>
    </div>
  );
}

export default Appartment;
