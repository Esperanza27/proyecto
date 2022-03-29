import React, { useState } from "react";

//style
import "./ButtonAccordion.scss";

const ButtonAccordion = ({ isOpen, buttonStatus }) => {
  const [accordion, setAccordion] = useState(false);

  return (
    <div className="button-accordion">
      Beta
      <div className="button" onClick={buttonStatus}>
        {isOpen ? "-" : "+"}
      </div>
    </div>
  );
};
export default ButtonAccordion;
