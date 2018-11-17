import React, { Component } from "react";
import { FlatList } from "react-native";
import { Spinner, View, Button, Text } from "native-base";
import styled from "styled-components/native";
import * as firebase from "firebase";

import ItemCard from "../components/ItemCard";

import theme from "../theme";

class HomeScreen extends Component {
  state = { items: [], loading: true, loggedIn: false };

  componentDidMount() {
    const itemsRef = firebase.database().ref("/items/");

    itemsRef.on("value", snapshot => {
      const itemsArray = this.snapshotToArray(snapshot.val());
      this.setState({ items: itemsArray, loading: false });
    });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  snapshotToArray = snapshot =>
    Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

  renderAddItem() {
    if (this.state.loggedIn) {
      return (
        <StyButton
          block
          onPress={() => this.props.navigation.navigate("AddItemScreen")}
        >
          <Text>Add Item</Text>
        </StyButton>
      );
    }
  }

  renderItems() {
    if (this.state.loading) {
      return (
        <SpinnerView>
          <Spinner color={theme.colors.primary} />
        </SpinnerView>
      );
    }

    return (
      <FlatList
        data={this.state.items}
        renderItem={({ item }) => <ItemCard item={item} key={item.key} />}
      />
    );
  }

  // addItem() {
  //   const newItem = {
  //     title: "Another dope thing",
  //     category: "Mythical objects",
  //     posted: new Date()
  //   };

  //   firebase.database().ref("/items/").push(newItem);
  // }

  render() {
    return (
      <View padder>
        <Text>{this.state.loggedIn ? "Hello user" : "Hello visitor"}</Text>
        {this.renderAddItem()}
        <View>{this.renderItems()}</View>
      </View>
    );
  }
}

const SpinnerView = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 30;
  margin-bottom: 30;
`;

export default HomeScreen;
