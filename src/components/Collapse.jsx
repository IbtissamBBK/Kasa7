import React, { useState, useRef } from "react"; // Import des hooks React
import "../styles/Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, children }) { // Propriétés du composant Collapse (titre et contenu) 
  const [isOpen, setIsOpen] = useState(false); // si la section est ouverte ou fermée (par défaut fermée) 
  const contentRef = useRef(null); // pour mesurer la hauteur du contenu à afficher/masquer

  return (
    <div className="collapse">
      {/* Conteneur */}
      <div
        className="collapse__header"
        onClick={() => setIsOpen((prev) => !prev)} // Toggle l'état ouvert/fermé au clic sur le titre
      >
        <h2 className="collapse__title">{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown} // Icône change selon l'état ouvert/fermé
          className="collapse__icon"
        />
      </div>
      {/* Wrapper pour gérer l'animation de hauteur */}
      <div
        className="collapse__content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px", // Définit la hauteur selon l'état ouvert/fermé (0px = masqué) 
        }}
      >
        {/* Contenu à afficher/masquer */}
        <div ref={contentRef} className="collapse__content">
          {children} {/* Affiche le contenu passé en prop */} 
        </div>
      </div>
    </div>
  );
}

export default Collapse;
