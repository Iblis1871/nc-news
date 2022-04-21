import React, { useState } from "react";
import { useEffect } from "react";
import { getTopics } from "../../utils/API";
import { Link } from "react-router-dom";
import { Wrapper, Content, Trending } from "./Nav.styles";

export default function Navbar() {
  const [topics, setTopic] = useState([]);

  const noArticlesClick = () => {
    alert("No articles matching this topic yet!");
  };

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      console.log(topicsFromApi.topics);
      setTopic(topicsFromApi.topics);
    });
  }, []);
  return (
    <Wrapper>
      <Content>
        <nav>
          <Link to="/">Home</Link> ||
          <Link to="/articles">Articles</Link> ||
          <Link to="/login">Login</Link>
          <br></br>
          <Trending>
            Trending topics......
            <Link to="/articles/coding"> 🤖 #Coding</Link> ||
            <Link to="/articles/cooking"> 🥙 #Cooking</Link> ||
            <Link to="/articles/football"> ⚽ #Football</Link> ||
            <Link onClick={noArticlesClick} to="/articles/StarTrek">
              🖖 #Star Trek
            </Link>{" "}
            ||
            <Link onClick={noArticlesClick} to="/articles/elves">
              🧝 #Elves
            </Link>{" "}
            ||
            {/* not working yet
            plan to make it a ticker at styling */}
          </Trending>
        </nav>
      </Content>
    </Wrapper>
  );
}
