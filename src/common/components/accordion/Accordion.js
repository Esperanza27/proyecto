import React, { useState } from "react";
//components
import ButtonAccordion from "../button/ButtonAccordion";
import CardAccordion from "../cards/CardAccordion";

//style
import "./Accordion.scss";

const Accordion = () => {
  const listAccordionBeta = [
    {
      title: "Facebook",
      description: "Facebook è un social media e rete sociale",
    },
    {
      title: "Instagram",
      description: "Instagram è un social media e rete sociale",
    },
    { title: "WhatsApp", description: "WhatsApp è un social media" },
  ];
  const [currentAccordion, setCurrentAccordion] = useState(false);

  const buttonStatus = () => {
    console.log("entrato");
    setCurrentAccordion(!currentAccordion);
  };

  return (
    <div>
      <ButtonAccordion isOpen={currentAccordion} buttonStatus={buttonStatus} />
      {currentAccordion &&
        listAccordionBeta.map((card, index) => {
          return <CardAccordion card={card} />;
        })}
    </div>
  );
};
export default Accordion;
