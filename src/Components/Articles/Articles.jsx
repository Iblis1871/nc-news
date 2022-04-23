import React, { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/API";
import {
  Wrapper,
  Title,
  Button,
  AuthorTopic,
  Votes,
  Topic,
} from "./Articles.styles";

const Articles = () => {
  const [article, setArticle] = useState([]);

  const [err, setErr] = useState(null);
  const [searchParams] = useSearchParams();

  const deleteClick = () => {
    alert("Do you really want to delete this?");
  };

  let topic = searchParams.get("topic");

  useEffect(() => {
    getArticles(topic)
      .then((articlesFromApi) => {
        setArticle(articlesFromApi.articles);
        setErr(null);
      })
      .catch((err) => {
        setErr("article not found");
      });
  }, [topic]);

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
      {article.map((articles, index) => {
        let idClick = `/articles/${articles.article_id}`;

        return (
          <>
            <Wrapper key={index}>
              <Link to={idClick}>
                <Title>{articles.title}</Title>
              </Link>
              <AuthorTopic>
                Author: @{articles.author}
                <Link to={`/articles?topic=${articles.topic}`}>
                  <Topic>Topic: #{articles.topic}</Topic>
                  <br />
                </Link>
                Date: {articles.created_at.slice(0, 10)}
              </AuthorTopic>
              <Votes>
                <Link to={idClick}>
                  <Button> ⭐ Votes {articles.votes}</Button>
                </Link>
                <br></br>

                <Link to={idClick}>
                  <Button>💬 Comments</Button>
                </Link>
                <br></br>
                <Button onClick={deleteClick}>❌ Delete</Button>
              </Votes>
            </Wrapper>
          </>
        );
      })}
    </div>
  );
};

export default Articles;
