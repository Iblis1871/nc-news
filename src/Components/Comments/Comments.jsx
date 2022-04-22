import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentByArticleId } from "../../utils/API";
// import PostComment from "../PostComment/PostComment";
import Delete from "../DeleteComment/DeleteComment";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
} from "./Comments.styles";

const Comments = ({ setComments, comments }) => {
  const { article_id } = useParams();
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);

  const upVoteClick = () => {
    setUpCount(upCount + 1);
  };

  const downVoteClick = () => {
    setDownCount(downCount - 1);
  };

  useEffect(() => {
    getCommentByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi.comments);
    });
  }, [article_id]);

  return comments.map((comment, index) => {
    return (
      <Wrapper key={index}>
        <Title>Author: @{comment.author}</Title>
        <AuthorTopic>
          Date: {comment.created_at} Comment ID: #{comment.comment_id}
        </AuthorTopic>
        <Content>{comment.body}</Content>
        <Votes>
          <Button onClick={upVoteClick}> {upCount} 🔼</Button> ||
          <Button onClick={downVoteClick}> {downCount} 🔽</Button> ||
          {comment.votes}
        </Votes>
        <Delete
          comment_id={comment.comment_id}
          setComments={setComments}
        ></Delete>
      </Wrapper>
    );
  });
};

export default Comments;
