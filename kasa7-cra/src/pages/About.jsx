import React from "react";
import Banner from "../components/Banner";
import imageAbout from "../assets/banner2.jpg"; 
import Section from "../components/Section.jsx"; 

function About() {
  return (
    <div>
      <Banner image={imageAbout} />
      <div className="about__sections">
        <Section
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et 
          toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Section
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Section
          title="Service"
          content="La qualité du service est au cœur de notre engagement chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit 
          empreinte de respect et de bienveillance."
        />
        <Section
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
          cela permet à nos équipes de vérifier que les standards sont bien respectés.
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;
