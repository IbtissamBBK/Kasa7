import React from "react";
import "../styles/AppartmentGrid.scss";
import Appartment from "./Appartment.jsx";
import data from "../data/data.json";

function AppartmentGrid() {
  return (
    <div className="grid">
      {data.map((appartment) => (
        <Appartment
          key={appartment.id}
          id={appartment.id}
          title={appartment.title}
          cover={appartment.cover}
        />
      ))}
    </div>
  );
}

export default AppartmentGrid;
