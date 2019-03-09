import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router } from "@reach/router";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const theme = {
  fontFamily: "Helvetica Neue",
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
  }
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Navigation />
      <Router>
        <HomePage path="/" />
        <AboutPage path="about" />
      </Router>
      <GlobalStyle />
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById("app"),
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
