import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid red;
  /* max-width: 600px; */
  /* grid-template-columns: repeat(auto-fill);
  grid-gap: 2rem; */
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 3px solid green;
`;

export const Title = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 3px solid green;
`;

export const AuthorTopic = styled.div`
  border: 3px solid blue;
`;

export const Votes = styled.div`
  border: 3px solid yellow;
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  :hover {
    color: black;
    background-color: lightcyan;
  }
`;

export const Link = styled.div`
  border: 3px solid orange;
`;
