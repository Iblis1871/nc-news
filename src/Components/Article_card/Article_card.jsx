import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../utils/API";
import Article_solo from "../Article_solo/Article_solo";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
  Link,
} from "./Article_card.styles";

// getting solo link ongto article to be fixed

const Article_card = () => {
  const [state, setState] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticles(article_id).then((articlesFromApi) => {
      setState(articlesFromApi.articles);
    });
  }, [article_id]);

  return (
    <div key="article_card">
      {state.map((articles) => {
        const idClick = `/api/articles/${articles.article_id}`; // <-- not working correctly?
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
            <Link key={idClick}>
              <Button>
                <a href={idClick}>Article ID: #{articles.article_id} </a>
              </Button>
            </Link>
            <Votes>
              <Button> Vote 🔼</Button> || <Button> Downvote 🔽</Button> ||
              Votes
              {articles.votes}
            </Votes>
            <Button>💬 Comments</Button>
            <Button>❌ Delete</Button>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Article_card;
