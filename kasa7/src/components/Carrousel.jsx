import React, { useState } from "react";
import "./Carrousel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, } from "@fortawesome/free-solid-svg-icons";

function Carrousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour changer d'image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="Carrousel">
            {pictures.length > 1 && (
                <>
                    {/* Flèche gauche */}
                    <button
                        className="Carrousel__arrow Carrousel__arrow--left"
                        onClick={handlePrev}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>

                    {/* Flèche droite */}
                    <button
                        className="Carrousel__arrow Carrousel__arrow--right"
                        onClick={handleNext}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </>
            )}

            {/* Image actuelle */}
            <img
                src={pictures[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="Carrousel__image"
            />
        </div>
    );
}

export default Carrousel;
