import React from "react";
import Carrousel from "../components/Carrousel";

function ApartmentDetails({ data }) {
  const apartment = data.find((item) => item.id === "c67ab8a7");

  return (
    <div>
      <Carrousel pictures={apartment.pictures} />
      <h1>{apartment.title}</h1>
      <p>{apartment.description}</p>
    </div>
  );
}

export default ApartmentDetails;
