import React, { useEffect, useState } from "react";
import { getArticles } from "../../utils/API";
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

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      console.log(articlesFromApi, "<<incoming from api");
      setState(articlesFromApi);
    });
  }, []);

  return (
    <div>
      {state.map(({ title, body, topic, author, created_at, votes }) => {
        return (
          <Wrapper>
            <Title>{title}</Title>
            <AuthorTopic>
              Author: @{author} || Topic: #{topic}
            </AuthorTopic>
            <Content>
              {created_at}
              {body}
            </Content>
            <Votes>
              <button>🔼</button> || <button>🔽</button> || Votes {votes}
            </Votes>
            <Button>
              <button> 💬 Comments</button>
              <button> ❌ Delete</button>
            </Button>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Article_card;
