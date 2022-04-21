import React from "react";
import { useState } from "react";
import { deleteComment } from "../../utils/API";
import { Button } from "./DeleteComment.styles.js";

const Delete = ({ comment_id, setComments }) => {
  const commentDeleted = () => {
    setComments((comments) => {
      return comments.filter((comment) => comment_id !== comment_id);
    });
    deleteComment(comment_id);
  };
  return <Button onClick={commentDeleted}> ❌ Delete</Button>;
};

export default Delete;
