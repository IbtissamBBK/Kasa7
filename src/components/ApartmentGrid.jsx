import React from "react";
import "../styles/_apartmentGrid.scss";
import Apartment from "./Apartment.jsx";
import data from "../data/data.json";

function ApartmentGrid() {
  return (
    <div className="grid">
      {data.map((apartment) => (
        <Apartment
          key={apartment.id}
          id={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
