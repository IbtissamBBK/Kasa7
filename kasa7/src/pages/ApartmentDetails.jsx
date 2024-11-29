import React from "react";
import { useParams, Navigate } from "react-router-dom"; // Ajout de Navigate 
import data from "../data/data.json";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

function ApartmentDetails() {
  const { id } = useParams();
  const apartment = data.find((item) => item.id === id);

  if (!apartment) {
    return <Navigate to="/notfound" replace={true} />; // Redirection vers la page NotFound
  }

  return (
    <section>
      
      {/* Carrousel */}
      <Carrousel pictures={apartment.pictures} />
      <div className="apartment__details">
        <div className="apartment__info">
          
          {/* Titre */}
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>

          {/* Tags */}
          <section className="apartment__tags">
            <div className="tags">
              {apartment.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="apartment__rating-host">
          
          {/* Host */}
          <section className="apartment__host">
            <div className="host__details">
            <p>{apartment.host.name}</p>
              <img
                src={apartment.host.picture}
                alt={`Hôte: ${apartment.host.name}`}
                className="host__picture"
              />
            </div>
          </section>

          {/* Rating */}
          <section className="apartment__rating">
            <div className="rating">
              {"★".repeat(Number(apartment.rating))}
              {"☆".repeat(5 - Number(apartment.rating))}
            </div>
          </section>
        </div>
        </div>

        {/* Collapse */}
        <div className="apartment-details__collapses">
          <Collapse title="Description">
            <p>{apartment.description}</p>
          </Collapse>
          <Collapse title="Équipements">
            <ul>
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      
    </section>
  );
}

export default ApartmentDetails;
