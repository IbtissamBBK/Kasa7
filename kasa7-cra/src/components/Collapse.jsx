import React, { useState, useRef } from "react";
import "./Collapse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Référence pour calculer la hauteur

  return (
    <div className="collapse">
      {/* Header avec icônes Font Awesome */}
      <div
        className="collapse__header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2 className="collapse__title">{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="collapse__icon"
        />
      </div>

      {/* Contenu avec animation */}
      <div
        className="collapse__content-wrapper"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div ref={contentRef} className="collapse__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
