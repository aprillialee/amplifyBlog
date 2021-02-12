import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import DisplayPosts from "./components/DisplayPosts";

function App() {
  return (
    <AppStyled className="App">
      <DisplayPosts />
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export default App;
