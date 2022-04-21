import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../utils/API";
import Comments from "../Comments/Comments";
import Votes from "../Votes/Votes";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  VotesStyles,
  Form,
} from "./Article_Single.styles";

const Article_Single = () => {
  const [soloArticle, setSoloArticle] = useState([]);
  const { article_id } = useParams();
  const [err, setErr] = useState(null);
  const [newAuthor, setNewAuthor] = useState("");
  const [newComment, setNewComment] = useState("");

  const [postComment, setPostComment] = useState({
    author: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostComment((currentPost) => {
      return { ...currentPost, author: newAuthor, body: newComment };
    });
    setNewAuthor("");
    setNewComment("");
  };

  useEffect(() => {
    getArticlesById(article_id)
      .then((articlesFromApi) => {
        setSoloArticle(articlesFromApi.articles);
        setErr(null);
      })
      .catch((err) => {
        setErr("article not found");
      });
  }, [article_id]);

  if (err)
    return (
      <p>
        "Article not found"
        <br></br>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvGMzrK0_ao_1OszEweY8GbIhIw6kHT43ew&usqp=CAU"
          alt="cat with pc keyboard on sofa"
        ></img>
      </p>
    );

  return (
    <div key="Article_Single">
      {soloArticle.map((articles, index) => {
        return (
          <Wrapper key={index}>
            <Title>{articles.title}</Title>
            <AuthorTopic>
              Author: @{articles.author} || Topic: #{articles.topic}
            </AuthorTopic>
            <Content>
              Date: {articles.created_at}
              {articles.body}
              Article ID: #{articles.article_id}
              {/* add in heading and make the styles unique */}
            </Content>
            <VotesStyles>
              <Votes
                votes={articles.votes}
                article_id={articles.article_id}
              ></Votes>
            </VotesStyles>
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
            <Comments />
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Article_Single;
