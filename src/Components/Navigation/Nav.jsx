import { Link } from "react-router-dom";
import { Wrapper, Content, Trending } from "./Nav.styles";

export default function Navbar() {
  const noArticlesClick = () => {
    alert("No articles matching this topic yet!");
  };

  return (
    <Wrapper>
      <Content>
        <nav>
          <Link to="/articles">Articles</Link> ||
          <Link to="/login">Login</Link> ||
          <br></br>
          <Trending>
            Trending topics......
            <Link to="/articles?topic=coding"> 🤖 #Coding</Link> ||
            <Link to="/articles?topic=cooking"> 🥙 #Cooking</Link> ||
            <Link to="/articles?topic=football"> ⚽ #Football</Link> ||
            <Link onClick={noArticlesClick} to="/articles?topic=star-trek">
              🖖 #Star Trek
            </Link>{" "}
            ||
            <Link onClick={noArticlesClick} to="/articles?topic=Elves">
              🧝 #Elves
            </Link>{" "}
            ||
            {/* plan to make it a ticker at styling */}
          </Trending>
        </nav>
      </Content>
    </Wrapper>
  );
}
