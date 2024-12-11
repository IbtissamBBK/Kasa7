import React, { useState } from "react"; // Importation de React et du hook useState
import "../styles/Carrousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Icones pour les flèches
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"; // Import des icônes de navigation

function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0); // État pour suivre l'index de l'image actuelle

    // Fonction pour passer à l'image précédente
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    // Fonction pour passer à l'image suivante
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="Carrousel">
                        
            {/* Affiche les flèches de navigation uniquement s'il y a plusieurs images */}
            {pictures.length > 1 && (
                <>
                    {/* Flèche gauche pour aller à l'image précédente */}
                    <button
                        className="Carrousel__arrow Carrousel__arrow--left"
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Flèche droite pour aller à l'image suivante */}
                    <button
                        className="Carrousel__arrow Carrousel__arrow--right"
                        onClick={handleNext}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </>
            )}

            {/* Image actuelle affichée */}
            <img
                src={pictures[currentIndex]} // URL de l'image courante
                alt={`Slide ${currentIndex + 1}`} // Texte alternatif pour l'accessibilité
                className="Carrousel__image"
                
            />
            
            <div className="Carrousel__counter">
                {currentIndex + 1} / {pictures.length}
            </div>
            
        </div>
    );
}

export default Carrousel; // Export du composant Carrousel pour l'utiliser dans d'autres fichiers

