import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import Navigation from "./src/Navigation";
// import AppNavigator from "./src/AppNavigator";

import theme from "./src/theme";

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBVGeBWml4I9LkXo3psb_itg-EIATRtDWQ",
      authDomain: "metro-md-restore.firebaseapp.com",
      databaseURL: "https://metro-md-restore.firebaseio.com",
      projectId: "metro-md-restore",
      storageBucket: "metro-md-restore.appspot.com",
      messagingSenderId: "989908703673"
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation loggedIn={this.state.loggedIn} />
        {/* <AppNavigator /> */}
      </ThemeProvider>
    );
  }
}

export default App;
