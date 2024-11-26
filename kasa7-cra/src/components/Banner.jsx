import React from "react";
import "./Banner.scss";



function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${image})`,
        
      }}
    >
      {text && <h1 className="banner__title">{text}</h1>}
    </div>
  );
}

export default Banner;