import React from "react";
import { useParams, Navigate } from "react-router-dom"; // Paramètres de l'URL et gérer les redirections
import data from "../data/data.json"; 
import Carrousel from "../components/Carrousel"; // Composant pour afficher un carrousel d'images
import Collapse from "../components/Collapse"; // Composant pour afficher des sections repliables
import "../styles/ApartmentDetails.scss"; 

function ApartmentDetails() {
  const { id } = useParams(); // Récupère l'identifiant de l'appartement depuis l'URL (paramètre :id) 
  const apartment = data.find((item) => item.id === id); // Recherche l'appartement correspondant dans les données json  

  // Redirection si incorrect
  if (!apartment) {
    return <Navigate to="/notfound" replace={true} />;
  }

  return (
    <section>
      {/* Carrousel */}
      <Carrousel pictures={apartment.pictures} /> {/* Affiche les images de l'appartement */}

      <div className="apartment__details">
        <div className="apartment__info">
          {/* Titre et localisation de l'appartement */}
          <h1>{apartment.title}</h1>
          <p>{apartment.location}</p>

          {/* Affichage des tags à l'appartement */}
          <section className="apartment__tags">
            <div className="tags">
              {apartment.tags.map((tag, index) => ( // Affiche les tags de l'appartement 
                <span key={index} className="tag"> 
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        <div className="apartment__rating-host">
          {/* Informations sur l'hôte */}
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

          {/* Note */}
          <section className="apartment__rating">
            <div className="rating">
              {"★".repeat(Number(apartment.rating))} {/* Étoiles pleines */}
              {"☆".repeat(5 - Number(apartment.rating))} {/* Étoiles vides */} 
            </div>
          </section>
        </div>
      </div>

      {/* Description et équipements) */}
      <div className="apartment-details__collapses"> 
        <Collapse title="Description"> 
          <p>{apartment.description}</p>
        </Collapse>
        <Collapse title="Équipements"> 
          <ul>
            {apartment.equipments.map((equipment, index) => ( // Affiche les équipements de l'appartement
              <li key={index}>{equipment}</li> 
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}

export default ApartmentDetails;