import React from "react";

import { useComment } from "../useComment";

import styles from "./styles.module.scss";

function Body() {
  const {
    comment: { content },
  } = useComment();

  return (
    <div>
      <p className={styles.content}>{content}</p>
    </div>
  );
}

export { Body };
