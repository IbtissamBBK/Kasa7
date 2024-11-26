import React, { useState } from "react";
import "./Section.scss";

function Section({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section">
      <div
        className="section__header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2>{title}</h2>
        <span className="section__toggle">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className="section__content">{content}</p>}
    </div>
  );
}

export default Section;
