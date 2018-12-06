import React, { Component } from "react";
import { ThemeProvider } from "styled-components/native";
import * as Expo from "expo";
import * as firebase from "firebase";

import Navigation from "./src/Navigation";

import theme from "./src/theme";

class App extends Component {
  state = { isReady: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBVGeBWml4I9LkXo3psb_itg-EIATRtDWQ",
      authDomain: "metro-md-restore.firebaseapp.com",
      databaseURL: "https://metro-md-restore.firebaseio.com",
      projectId: "metro-md-restore",
      storageBucket: "metro-md-restore.appspot.com",
      messagingSenderId: "989908703673"
    });

    this.loadFonts();
  }

  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <Expo.AppLoading />
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    );
  }
}

export default App;
