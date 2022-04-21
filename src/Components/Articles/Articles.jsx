import React, { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../../utils/API";
import {
  Wrapper,
  Content,
  Title,
  Button,
  AuthorTopic,
  Votes,
  Select,
  Option,
} from "./Articles.styles";

const Articles = () => {
  const [article, setArticle] = useState([]);
  const { article_id, topic } = useParams();
  const [err, setErr] = useState(null);
  const [search, setSearch] = useSearchParams();
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("created_at");

  const deleteClick = () => {
    alert("Do you really want to delete this?");
  };

  useEffect(() => {
    getArticles(article_id)
      .then((articlesFromApi) => {
        setArticle(articlesFromApi.articles);
        setErr(null);
      })
      .catch((err) => {
        setErr("article not found");
      });
  }, [article_id]);

  const handleSort = (event) => {
    let sortParams = { sort_by: event.target.value, order_by: order };
    setSearch(sortParams);
    setSort(sortParams.sort_by);
    getArticles(topic, sortParams.sort_by, order).then((articlesFromApi) => {
      setArticle(articlesFromApi);
    });
  };

  const handleOrder = (event) => {
    let orderParams = { sort_by: sort, order: event.target.value };
    setSearch(orderParams);
    setOrder(orderParams.order_by);
    getArticles(topic, sort, orderParams.order_by).then((articlesFromApi) => {
      setArticle(articlesFromApi);
    });
  };

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
      <Select key={sort} onChange={handleSort}>
        <Option value="">SORT ARTICLES</Option>
        <Option value="created_at">Date</Option>
        <Option value="votes">Votes</Option>
        <Option value="topic">Topic</Option>
      </Select>
      <Select key={order} onChange={handleOrder}>
        <Option value="">ORDER ARTICLES</Option>
        <Option value="asc">Ascending</Option>
        <Option value="desc">Descending</Option>
      </Select>
      {article.map((articles, index) => {
        let idClick = `/articles/${articles.article_id}`;
        return (
          <>
            <Wrapper key={index}>
              <Link to={idClick}>
                <Title>{articles.title}</Title>
              </Link>
              <AuthorTopic>
                Author: @{articles.author} || Topic: #{articles.topic}
              </AuthorTopic>
              <Content>Date: {articles.created_at}</Content>
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
          </>
        );
      })}
    </div>
  );
};

export default Articles;
