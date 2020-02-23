import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import HeaderNav from "./App/HeaderNav"
import ContextProviders from "./ContextProviders"
import Routes from "./Routes/Routes"
import GlobalStyle from "./Styles/GlobalStyle"
import theme from "./Styles/theme"

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ContextProviders>
            <Container>
              <HeaderNav />
              <Body>
                <Routes />
              </Body>
              <GlobalStyle />
            </Container>
            <div id="modal" />
          </ContextProviders>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  )
}

export default App

const Container = styled.div`
  > * {
    margin-bottom: 1rem;
  }
`

const Body = styled.div`
  max-width: 1200px;
  margin: auto;
  background: ${(props) => props.theme.shadedWhite};
`
