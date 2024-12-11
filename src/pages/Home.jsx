import React from "react";
import Banner from "../components/Banner";
import AppartmentGrid from "../components/AppartmentGrid";
import bannerImg from "../assets/banner.png";

function Home() {
  return (
    <div>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" /> 
      <AppartmentGrid />
    </div>
  );
}

export default Home;
