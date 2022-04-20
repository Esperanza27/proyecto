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
      status: false,
      id: 0,
    },
    {
      title: "Instagram",
      description: "Instagram è un social media e rete sociale",
      status: false,
      id: 1,
    },
    {
      title: "WhatsApp",
      description: "WhatsApp è un social media",
      status: false,
      id: 2,
    },
  ];

  const [accordionState, setAccordionState] = useState(listAccordionBeta);

  const buttonStatus = (id) => {
    const listAccordionBetaNew = accordionState.map((card) => {
      return card.id === id ? { ...card, status: !card.status } : card;
    });
    setAccordionState(listAccordionBetaNew);
  };

  console.log(accordionState);

  return (
    <div>
      {accordionState.map((card, index) => {
        return (
          <div>
            <ButtonAccordion
              isOpen={card?.status}
              buttonStatus={() => buttonStatus(card?.id)}
            />
            {card?.status && <CardAccordion card={card} />}
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
