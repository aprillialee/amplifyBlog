import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import DisplayPosts from "./components/DisplayPosts";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <AppStyled>
      <CreatePost />
      <DisplayPosts />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export default App;
