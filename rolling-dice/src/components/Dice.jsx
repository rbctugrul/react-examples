import React from "react";
import "./dice.css";

function Dice({ face }) {
  return <i className={`dice fas fa-dice-${face}`}></i>;
}

export default Dice;
