import React from "react";
import styles from "./styles.module.scss";

import { useComment } from "../useComment";
import { Comment } from "../index";

function Replies() {
  const {
    comment: { replies },
    currentUser,
  } = useComment();

  return (
    <div className={styles.replies}>
      {replies.map((reply) => (
        <Comment data={{ comment: reply, currentUser }} key={reply.id} />
      ))}
    </div>
  );
}

export { Replies };
