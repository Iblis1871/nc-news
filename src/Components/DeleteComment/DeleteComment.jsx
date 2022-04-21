import React from "react";
import { useState } from "react";
import { deleteComment } from "../../utils/API";
import { Button } from "./DeleteComment.styles.js";

// const confirmDelete = () => {
//   let confirmClick = confirm("Do you really want to delete this?");

//   if (confirmClick) {
//     alert("Comment deleted, forever lost like tears in the rain");
//   } else {
//     alert("Not so sure huh? ");
//   }
// };

const Delete = ({ comment_id, setComments }) => {
  const commentDeleted = () => {
    setComments((comments) => {
      return comments.filter(() => comment_id !== comment_id);
    });
    deleteComment(comment_id);
  };
  return <Button onClick={commentDeleted}> ❌ Delete</Button>;
};

export default Delete;
