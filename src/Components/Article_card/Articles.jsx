import React, { useEffect, usearticle, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticles } from "../../utils/API";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
} from "./Articles.styles";

const Articles = () => {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [err, setErr] = useState(null);

  const deleteClick = () => {
    alert("Do you really want to delete this?");
  };

  useEffect(() => {
    getArticles(article_id)
      .then((articlesFromApi) => {
        console.log(articlesFromApi);
        setArticle(articlesFromApi.articles);
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
    <div key="Articles">
      {article.map((articles) => {
        const idClick = `/articles/${articles.article_id}`;
        return (
          <Wrapper>
            <Link to={idClick}>
              <Title>{articles.title}</Title>
            </Link>
            <AuthorTopic>
              Author: @{articles.author} || Topic: #{articles.topic}
            </AuthorTopic>
            <Content>
              Date: {articles.created_at}
              {articles.body}
            </Content>
            <Votes>
              <Link to={idClick}>
                <Button> ⭐ Votes {articles.votes}</Button>
              </Link>
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

export default Articles;
