import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId } from "../../utils/API";
import Articles_topic from "../Articles_Topic/Articles_Topic";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
} from "./Comments.styles";

const Comments = () => {
  const { article_id } = useParams();
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [comments, setComments] = useState([]);

  const upVoteClick = () => {
    setUpCount(upCount + 1);
  };

  const downVoteClick = () => {
    setDownCount(downCount - 1);
  };

  const deleteClick = () => {
    alert("Do you really want to delete this?");
  };

  useEffect(() => {
    getCommentByArticleId(article_id).then((commentsFromApi) => {
      console.log(commentsFromApi);
      setComments(commentsFromApi.comments);
    });
  }, [article_id]);

  return comments.map((comment, index) => {
    return (
      <Wrapper key={index}>
        <Title>Author: @{comment.author}</Title>
        <AuthorTopic>
          Date: {comment.created_at} Comment ID: #{comments.comment_id}
        </AuthorTopic>
        <Content>{comment.body}</Content>
        <Votes>
          <Button onClick={upVoteClick}> {upCount} 🔼</Button> ||
          <Button onClick={downVoteClick}> {downCount} 🔽</Button> ||
          {comment.votes}
        </Votes>
        <Button onClick={deleteClick}>❌ Delete</Button>
      </Wrapper>
    );
  });
};

export default Comments;
