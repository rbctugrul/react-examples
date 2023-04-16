import React, { useState } from "react";
import Dice from "./Dice";
import "./rolldice.css";

function Rolldice({ sides }) {
  const [state, setState] = useState({
    dice1: "one",
    dice2: "three",
    rolling: false,
    totalscore: 4,
  });

  const { dice1, dice2, rolling, totalscore } = state;

  const roll = () => {
    const newDice1 = sides[Math.floor(Math.random() * sides.length)];
    const newDice2 = sides[Math.floor(Math.random() * sides.length)];
    console.log(newDice1);
    const score1 = Object.values(newDice1); //[3]
    const score2 = Object.values(newDice2); //[1]
    console.log(score1);
    setState({
      dice1: Object.keys(newDice1), // [one]
      dice2: Object.keys(newDice2), // [two]
      rolling: true,
      totalscore: score1[0] + score2[0],
    });

    setTimeout(() => {
      setState((prevState) => ({ ...prevState, rolling: false }));
    }, 1000);
  };

  return (
    <>
      <div className="roll-dice">
        <div className="rolldice-container">
          <Dice face={String(dice1)} rolling={rolling} />
          <Dice face={String(dice2)} rolling={rolling} />
        </div>
        <button onClick={roll} disabled={rolling}>
          {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2>Total Score : {totalscore}</h2>
      </div>
    </>
  );
}

Rolldice.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default Rolldice;
