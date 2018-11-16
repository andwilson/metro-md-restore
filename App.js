import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";

import Navigation from "./src/Navigation";
import theme from "./src/theme";

import * as firebase from "firebase";

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

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Navigation loggedIn={this.state.loggedIn}/>
      </ThemeProvider>
    );
  }
}

export default App;
