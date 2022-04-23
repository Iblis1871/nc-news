import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: lightgrey;
  font-family: "Courier New", Courier, monospace;
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  align-items: centre;
  border: 3px solid palevioletred;
`;

export const Title = styled.div`
  font-size: 1.7em;
  display: flex;
  align-items: center;
  padding: 2px;
  /* border: 1px solid darkgray; */
  text-transform: uppercase;
  max-width: 666px;
  min-width: 666px;
`;

export const AuthorTopic = styled.div`
  /* border: 1px solid darkgray; */
  background-color: lightgray;
  text-transform: uppercase;
  padding: 2px;
`;

export const Votes = styled.div`
  /* border: 1px solid darkgray; */
  background-color: lightgrey;
  position: relative;
  padding: 3px;
`;

export const Button = styled.button`
  height: 30px;
  width: 130px;
  :hover {
    color: black;
    background-color: lightcyan;
  }
`;
export const Option = styled.option``;

export const Topic = styled.div``;

export const Link = styled.link``;

export const Select = styled.select`
  margin-top: 7px;
  margin: 3px;
  font-style: italic;
  height: 30px;
  width: 150px;
  :hover {
    color: black;
    background-color: lightcyan;
  }
`;
