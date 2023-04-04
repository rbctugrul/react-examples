import React from "react";

import { Comment } from "../comment";
import { CommentContextProvider } from "../comment/useComment";
import { NewCommentEditor } from "../new-comment-editor";

import styles from "./styles.module.scss";

import Data from "../../../data.json";

function Conservation() {
  return (
    <div className={styles.conversationWrapper}>
      {Data.comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}

      <NewCommentEditor />
    </div>
  );
}

export { Conservation };
