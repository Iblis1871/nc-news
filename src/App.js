import React from "react";
import { Route, Routes } from "react-router-dom";
import Articles_topic from "./Components/Articles_topic/Articles_topic";
import Articles from "./Components/Articles/Articles";
import Article_Single from "./Components/Article_Single/Article_Single";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navigation/Nav";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article_Single />} />
        <Route path="/topics" element={<Articles_topic />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <h1>UNDER CONSTRUCTION</h1>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvGMzrK0_ao_1OszEweY8GbIhIw6kHT43ew&usqp=CAU"
        alt="cat with pc keyboard on sofa"
      ></img>
    </div>
  );
}
