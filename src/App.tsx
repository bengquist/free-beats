import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import HeaderNav from "./App/HeaderNav";
import Routes from "./Routes/Routes";
import GlobalStyle from "./Styles/GlobalStyle";

function App() {
  return (
    <Router>
      <HeaderNav />
      <Container>
        <Routes />
      </Container>
      <GlobalStyle />
    </Router>
  );
}

export default App;

const Container = styled.div``;
