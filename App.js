import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";

import Navigation from "./src/Navigation";
import theme from "./src/theme";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVGeBWml4I9LkXo3psb_itg-EIATRtDWQ",
  authDomain: "metro-md-restore.firebaseapp.com",
  databaseURL: "https://metro-md-restore.firebaseio.com",
  projectId: "metro-md-restore",
  storageBucket: "metro-md-restore.appspot.com",
  messagingSenderId: "989908703673"
};

class App extends Component {
  state = {};

  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );
  }
}

export default App;
