import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesById } from "../../utils/API";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
} from "./Article_solo.styles";

// getting solo article not working

const Article_solo = () => {
  const [state, setState] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticlesById(article_id).then((articlesFromApi) => {
      setState(articlesFromApi.articles);
    });
  }, [article_id]);

  return (
    <div key="Article_solo">
      {state.map((articles) => {
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
            Article ID: #{articles.article_id}
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

export default Article_solo;
