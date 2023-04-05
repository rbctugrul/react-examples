import React, { useState } from "react";

import { Comment } from "../comment";
import { NewCommentEditor } from "../new-comment-editor";

import styles from "./styles.module.scss";

function Conversation({ comments: allComments, currentUser }) {
  const [comments, setComments] = useState(allComments ?? []);

  const handleSendNewReply = (content) => {
    setComments([
      ...comments,
      {
        content,
        createdAt: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * 100),
        user: currentUser,
        score: 0,
        replies: [],
      },
    ]);
  };

  return (
    <div className={styles.conversationWrapper}>
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment data={{ comment, currentUser }} key={comment.id} />
        ))}
      <NewCommentEditor {...currentUser} onSend={handleSendNewReply} />
    </div>
  );
}

export { Conversation };
