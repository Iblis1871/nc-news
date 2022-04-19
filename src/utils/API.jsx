import axios from "axios";
import React from "react";

const baseAPI = axios.create({
  baseURL: "https://nc-news-iblis-be.herokuapp.com/api",
});

///// GET TOPICS, ARTICLES AND COMMENTS /////

export const getTopics = () => {
  return baseAPI.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return baseAPI.get("/articles").then(({ data }) => {
    console.log(data.articles, "<<axios get request");
    return data.articles;
  });
};

export const getArticleById = async (article_id) => {
  const { data } = await baseAPI.get(`/articles/${article_id}`);
  return data.article; // refactor using Paul example, not needed with axios
};

export const getCommentByArticleId = async (article_id) => {
  const { data } = await baseAPI.get(`/articles/${article_id}/comments`);
  return data.article;
};

///// POST, PATCH AND DELETE COMMENTS /////

///// PATCH VOTES /////

//// GET USERS FOR LOGIN /////
