import React, { useMemo, useState, createContext } from "react";
import { EDIT_MODE, PREVIEW_MODE } from "./constants";

const CommentContext = createContext();

const CommentProvider = ({ children, data }) => {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onDelete = () => {
    // Create a modal component and trigger it here
    setComment(null);
  };

  const onEdit = () => {
    setEditting(!isEditting);
  };

  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const onSendReply = (content) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          content,
          createdAt: new Date().toLocaleDateString(),
          id: Math.floor(Math.random() * 100),
          user: data.currentUser,
          score: 0,
          replies: [],
          replyingTo: comment.user.username,
        },
      ],
    });

    onReply();
  };

  const onUpdate = (content) => {
    setComment({
      ...comment,
      content,
    });

    onEdit();
  };

  const state = useMemo(
    () => ({
      currentUser: data.currentUser,
      onUpdate,
      onSendReply,
      comment,
      isReplying,
      onSendReply,
      onPositiveReaction,
      onNegativeReaction,
      setEditting,
      onReply,
      onDelete,
      onEdit,
      mode: isEditting ? EDIT_MODE : PREVIEW_MODE,
      ownByCurrentUser: data.currentUser.username === comment?.user.username,
    }),
    [isReplying, isEditting, comment]
  );

  return (
    <CommentContext.Provider value={state}>{children}</CommentContext.Provider>
  );
};

function useComment() {
  const context = React.useContext(CommentContext);

  return context;
}

export { CommentProvider, useComment };
