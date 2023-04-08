import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} alt="img" />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="cardDescription">{props.description}</p>
        </div>
        <button>See the Details</button>
      </div>
    </div>
  );
}
