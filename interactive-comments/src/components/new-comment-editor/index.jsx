import React, { useState } from "react";
import styles from "./styles.module.scss";

import { TextArea } from "../textarea";
import { Button } from "../button";

function NewCommentEditor({ username, image, isReply = false, onSend }) {
  const [comment, setComment] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSend = () => {
    onSend(comment);
    setComment("");
  };

  return (
    <div className={styles.editorWrapper}>
      <img className={styles.userImage} src={image.webp} alt={username} />
      <TextArea
        value={comment}
        onChange={handleChangeComment}
        placeholder="Add a comment..."
      />
      <Button variant="primary" onClick={handleSend}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
}

export { NewCommentEditor };
