import React from "react";
import styles from "./styles.module.scss";
import { Button } from "../../button";
import { useComment } from "../useComment";

function Header() {
  const {
    onEdit,
    onReply,
    onDelete,
    ownByCurrentUser,
    comment: { user, createdAt },
  } = useComment();

  return (
    <div className={styles.commentHeader}>
      <img
        className={styles.userImage}
        src={user.image.webp}
        alt={user.username}
      />
      <p className={styles.username}>{user.username}</p>
      {ownByCurrentUser && <span className={styles.ownIndicator}>you</span>}
      <p className={styles.createdAt}>{createdAt}</p>

      <div className={styles.actionButtons}>
        {ownByCurrentUser ? (
          <>
            <Button onClick={onDelete} variant="warn">
              <img src="./images/icon-delete.svg" aria-hidden="true" />
              Delete
            </Button>
            <Button onClick={onEdit}>
              <img src="./images/icon-reply.svg" aria-hidden="true" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" aria-hidden="true" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
}

export { Header };
