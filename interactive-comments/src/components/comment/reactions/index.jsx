import React from "react";

import { Button } from "../../button";

import styles from "./styles.module.scss";
import { useComment } from "../useComment";

function Reactions() {
  const {
    comment: { score },
  } = useComment();

  return (
    <div className={styles.reactionsWrapper}>
      <Button aria-labelledby="Positive reaction button">
        <img src="./images/icon-plus.svg" alt="img" aria-hidden="true" />
      </Button>
      <p>{score}</p>
      <Button aria-labelledby="Negative reaction button">
        <img src="./images/icon-minus.svg" alt="img" aria-hidden="true" />
      </Button>
    </div>
  );
}

export { Reactions };
