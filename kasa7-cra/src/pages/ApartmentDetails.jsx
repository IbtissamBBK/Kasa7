import React from "react";
import { useParams } from "react-router-dom";

function ApartmentDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL

  return (
    <div>
      <h1>Détails de l'appartement</h1>
      <p>ID : {id}</p>
    </div>
  );
}

export default ApartmentDetails;
