import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import * as firebase from "firebase";

class DeleteItemScreen extends Component {
  state = { ...this.props.navigation.state.params };

  onDeletePress() {
    const { key } = this.props.navigation.state.params;
    firebase
      .database()
      .ref(`items/${key}`)
      .remove();
    this.props.navigation.goBack();
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          style={{ alignSelf: "center" }}
          onPress={this.onDeletePress.bind(this)}
        >
          <Text>{this.state.title}</Text>
        </Button>
      </View>
    );
  }
}

export default DeleteItemScreen;
