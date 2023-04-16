import React from "react";
import "./dice.css";

function Dice({ face, rolling }) {
  return <i className={`dice fas fa-dice-${face} ${rolling && "shaking"}`}></i>;
}

export default Dice;
