import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles from "./Components/Articles/Articles";
import Article_Single from "./Components/Article_Single/Article_Single";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navigation/Nav";

export default function App() {
  return (
    <div lang="en">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article_Single />} />
        <Route path="/topics/articles/:topic" element={<Articles />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
