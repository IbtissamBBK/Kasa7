import React from "react";
import "../styles/_banner.scss";



function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`, // La prop 'image' est utilisée ici pour définir le chemin de l'image 
        
      }}
    >
      {/* Affiche le texte (h1) seulement si la prop 'text' est définie */}
      {text && <h1 className="banner__title">{text}</h1>}
    </div>
  );
}

export default Banner;