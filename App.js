import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";

import Navigation from "./src/Navigation";
import theme from "./src/theme";

class App extends Component {
  state = {};
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation/>
      </ThemeProvider>
    );
  }
}

export default App;
