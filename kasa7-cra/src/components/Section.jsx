import React, { useState } from "react";
import "./Section.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Section({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section">
      <div
        className="section__header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon
          icon={isOpen ? faChevronDown : faChevronUp}
          className="section__icon"
        />
      </div>
      {isOpen && <p className="section__content">{content}</p>}
    </div>
  );
}

export default Section;
