import React, { useState } from "react";
import People from "./data";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = People[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      if (newIndex > People.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      if (newIndex < 0) {
        newIndex = People.length - 1;
      }
      return newIndex;
    });
  };

  function randomCard() {
    return setIndex(Math.floor(Math.random() * 5 ));
  }


  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="name-job">
        <h4 className="name">{name}</h4>
        <p className="job">{job}</p>
      </div>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn">
          <FaChevronCircleLeft onClick={prevPerson} />
        </button>
        <button className="next-btn">
          <FaChevronCircleRight onClick={nextPerson} />
        </button>
      </div>
      <button className="random-btn" onClick={randomCard}>
        Random Character
      </button>
    </article>
  );
}

export default Review;
