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

const Article_solo = () => {
  const [soloArticle, setSoloArticle] = useState([]);
  const { article_id } = useParams();
  const [upCount, setUpCount] = useState(0);
  const [downCount, setDownCount] = useState(0);
  const [err, setErr] = useState(null);

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
    <div key="Article_solo">
      {soloArticle.map((articles) => {
        return (
          <Wrapper>
            <Title>{articles.title}</Title>
            <AuthorTopic>
              Author: @{articles.author} || Topic: #{articles.topic}
            </AuthorTopic>
            <Content>
              Date: {articles.created_at}
              {articles.body}
              Article ID: #{articles.article_id}
            </Content>
            <Votes>
              <Button onClick={upVoteClick}> {upCount} 🔼</Button> ||
              <Button onClick={downVoteClick}> {downCount} 🔽</Button> ||
              {articles.votes}
            </Votes>
            <Button onClick={deleteClick}>❌ Delete</Button>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Article_solo;
