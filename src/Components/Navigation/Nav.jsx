import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./Nav.styles";

export default function Navbar() {
  return (
    <Wrapper>
      <Content>
        <nav>
          <Link to="/">Home</Link> ||
          <Link to="/articles">Articles</Link> ||
          <Link to="/topics">Topics</Link> ||
          <Link to="/login">Login</Link> ||
        </nav>
      </Content>
    </Wrapper>
  );
}
