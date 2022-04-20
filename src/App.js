import React from "react";
import { Route, Routes } from "react-router-dom";
import Article_card from "./Components/Article_card/Article_card";
import Article_solo from "./Components/Article_solo/Article_solo";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navigation/Nav";

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Article_card />} />
        <Route path="/articles" element={<Article_card />} />
        <Route path="/articles/:article_id" element={<Article_solo />} />
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
  