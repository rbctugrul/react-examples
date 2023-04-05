import React from "react";
import styles from "./styles.module.scss";

import { useComment } from "../../useComment";

function Preview() {
  const {
    comment: { replyingTo, content },
  } = useComment();

  return (
    <p>
      {!!replyingTo && (
        <span className={styles.commentReplyingTo}>@{replyingTo}&nbsp;</span>
      )}
      {content}
    </p>
  );
}

export { Preview };
