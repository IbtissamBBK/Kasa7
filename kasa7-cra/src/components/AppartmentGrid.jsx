import React from 'react'
import "./AppartmentGrid.scss";
import Appartment from "./Appartment.jsx";

function AppartmentGrid() {
  return (
    <div className='grid'>
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
      <Appartment />
    </div>
  )
}

export default AppartmentGrid