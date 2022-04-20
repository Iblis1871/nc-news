import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles, getArticlesById } from "../../utils/API";
import Article_solo from "../Article_solo/Article_solo";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
} from "./Article_card.styles";

const Article_card = () => {
  const [state, setState] = useState([]);
  const { article_id } = useParams();
  const [upCount, setUpCount] = useState(0);

  const upVoteClick = () => {
    setUpCount(upCount + 1);
  };

  const deleteClick = () => {
    alert("Do you really want to delete this?");
  };

  useEffect(() => {
    getArticles(article_id).then((articlesFromApi) => {
      setState(articlesFromApi.articles);
    });
  }, [article_id]);

  return (
    <div key="article_card">
      {state.map((articles) => {
        const idClick = `/articles/${articles.article_id}`; // <-- not working correctly?
        return (
          <Wrapper>
            <Title>{articles.title}</Title>
            <AuthorTopic>
              Author: @{articles.author} || Topic: #{articles.topic}
            </AuthorTopic>
            <Content>
              Date: {articles.created_at}
              {articles.body}
            </Content>
            <Votes>
              <Button onClick={upVoteClick}> {upCount} Vote 🔼</Button> ||{" "}
              <Button> Downvote 🔽</Button> || Votes
              {articles.votes}
            </Votes>
            <Link to={idClick}>
              <Button>💬 Comments</Button>
            </Link>
            <Button onClick={deleteClick}>❌ Delete</Button>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Article_card;
