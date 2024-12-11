import React from "react";
import Banner from "../components/Banner";
import ApartmentGrid from "../components/ApartmentGrid";
import bannerImg from "../assets/banner.png";

function Home() {
  return (
    <div>
      <Banner image={bannerImg} text="Chez vous, partout et ailleurs" /> 
      <ApartmentGrid />
    </div>
  );
}

export default Home;
