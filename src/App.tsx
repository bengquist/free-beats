import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import HeaderNav from "./App/HeaderNav";
import Routes from "./Routes/Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <HeaderNav />
          <Body>
            <Routes />
          </Body>
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const Container = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`;

const Body = styled.div`
  max-width: 1200px;
  margin: auto;
  background: ${props => props.theme.shadedWhite};
`;
