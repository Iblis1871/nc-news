import axios from "axios";
import React from "react";

const baseAPI = axios.create({
  baseURL: "https://nc-news-iblis-be.herokuapp.com/api",
});

///// GET TOPICS, ARTICLES AND COMMENTS /////

export const getTopics = (slug) => {
  return baseAPI
    .get("/topics", {
      params: {
        slug,
      },
    })
    .then(({ data }) => {
      return data;
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
      return data;
    });
};

export const getCommentByArticleId = (article_id) => {
  return baseAPI
    .get(`/articles/${article_id}/comments`, {
      params: {
        article_id,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

///// POST, PATCH AND DELETE COMMENTS /////

///// PATCH VOTES /////

//// GET USERS FOR LOGIN /////
