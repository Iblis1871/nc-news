import React, { useState } from "react";
import { postComment } from "../../utils/API";
import { Form, Button } from "./PostComment.styles";

const PostComment = ({ article_id, setComments }) => {
  //   const [newAuthor, setNewAuthor] = useState([]);
  const [newComment, setNewComment] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, newComment).then((post) => {
      setComments((currComments) => {
        const addComment = [...currComments, post];
        return addComment;
      });
      setNewComment("");
    });
    // postComment(article_id, newAuthor).then((post) => {
    //   setAuthor((currAuthor) => {
    //     const addAuthor = [...currAuthor, post];
    //     return addAuthor;
    //   });
    //   setNewAuthor("");
    // });
  };
  //   console.log(setAuthor, "<<<<something!!");

  return (
    <Form onSubmit={handleSubmit}>
      {/* <input
        onChange={(event) => setNewAuthor(event.target.value)}
        value={newAuthor}
        id="author-update"
        name="author"
        type="text"
        placeholder="Enter author"
      /> */}
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
