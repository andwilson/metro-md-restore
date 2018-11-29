import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import * as firebase from "firebase";

class EditItemScreen extends Component {
  state = { ...this.props.navigation.state.params };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Edit Item Screen</Text>
      </View>
    );
  }
}

export default EditItemScreen;