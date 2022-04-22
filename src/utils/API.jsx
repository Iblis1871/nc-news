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

export const getArticles = (
  article_id,
  topic,
  sort_by = "created_at",
  order = "asc"
) => {
  return baseAPI
    .get(`/articles/`, {
      params: {
        article_id,
        topic,
        sort_by,
        order,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const getArticlesById = (article_id, topic) => {
  return baseAPI
    .get(`/articles/${article_id}`, {
      params: {
        article_id,
        topic,
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

///// POST AND DELETE COMMENTS /////

export const deleteComment = (comment_id) => {
  return baseAPI.delete(`/comments/${comment_id}`);
};

export const postComment = (article_id, newComment) => {
  return baseAPI
    .post(`/articles/${article_id}/comments`, {
      username: "weegembump",
      body: newComment,
    })
    .then(({ data }) => {
      return data;
    });
};

///// PATCH VOTES /////

export const updateVotesAdd = async (article_id) => {
  const { data } = await baseAPI.patch(`/articles/${article_id}`, {
    inc_votes: 1,
  });
  return data;
};

//// GET USERS FOR LOGIN /////

export const getUsers = () => {
  return baseAPI.get("/users").then(({ data }) => {
    return data;
  });
};
