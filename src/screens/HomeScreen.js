import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";

class HomeScreen extends Component {
  state = { items: [], loading: false };

  getItems() {}

  addItem() {
    const newItem = {
      title: "Another dope thing",
      category: "Mythical objects",
      posted: new Date()
    };

    firebase.database().ref("/items/").push(newItem);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Firebase test</Text>
      </View>
    );
  }
}

export default HomeScreen;
