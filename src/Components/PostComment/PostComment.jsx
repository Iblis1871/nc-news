import React, { useState } from "react";
import { postComment } from "../../utils/API";
import { Form, Button } from "./PostComment.styles";

const PostComment = ({ article_id, setComments }) => {
  const [newAuthor, setNewAuthor] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currComments) => {
      const post = {
        created_at: "",
        comment_id: 12,
        author: newAuthor,
        body: newComment,
        votes: 12,
      };

      const addComment = [...currComments, post];
      return addComment;
    });
    setNewComment("");
    postComment(article_id, newComment, newAuthor).then(() => {});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setNewAuthor(event.target.value)}
        value={newAuthor}
        id="author-update"
        name="author"
        type="text"
        placeholder="Enter author"
      />
      <input
        onChange={(event) => setNewComment(event.target.value)}
        value={newComment}
        id="comment-update"
        name="body"
        type="text"
        placeholder="Enter comment"
      />
      <Button>Submit</Button>
    </Form>
  );
};

export default PostComment;
