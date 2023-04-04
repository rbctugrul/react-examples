import React from "react";

import { Reactions } from "./reactions";
import { Header } from "./header";
import { Body } from "./body";

import styles from "./styles.module.scss";

function Comment() {
  return (
    <div className={styles.commentWrapper}>
      <Reactions />
      <div className={styles.commentContentArea}>
        <Header />
        <Body />
      </div>
    </div>
  );
}

export { Comment };
