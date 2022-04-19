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

export const getArticles = (article_id) => {
  return baseAPI
    .get(`/articles/`, {
      params: {
        article_id,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getArticlesById = (article_id) => {
  return baseAPI
    .get(`/articles/${article_id}`, {
      params: {
        article_id,
      },
    })
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

export const getCommentByArticleId = async (article_id) => {
  const { data } = await baseAPI.get(`/articles/${article_id}/comments`);
  return data.article;
};

///// POST, PATCH AND DELETE COMMENTS /////

///// PATCH VOTES /////

//// GET USERS FOR LOGIN /////
