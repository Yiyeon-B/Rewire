/*
 * © 2021 Thoughtworks, Inc.
 */

import React from "react";
import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { CssBaseline } from "@material-ui/core";
import HomePage from "../src/components/HomePage/HomePage.js";

function App() {



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div data-testid="custom-element" className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
