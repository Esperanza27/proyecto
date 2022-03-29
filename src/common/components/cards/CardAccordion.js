import React, { useState } from "react";
//style
import "./CardAccordion";
const CardAccordion = ({ card }) => {
  console.log(card);
  return (
    <div className="card">
      <h1>{card?.title}</h1>
      <p>{card?.description}</p>
    </div>
  );
};

export default CardAccordion;
