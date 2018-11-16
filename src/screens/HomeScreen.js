import React, { Component } from "react";
import { FlatList, Dimensions } from "react-native";
import { Content, Spinner, View } from "native-base";
import styled from "styled-components/native";
import * as firebase from "firebase";

import ItemCard from "../components/ItemCard";

import theme from "../theme";

class HomeScreen extends Component {
  state = { items: [], loading: true };

  componentDidMount() {
    const itemsRef = firebase.database().ref("/items/");

    itemsRef.on("value", snapshot => {
      const itemsArray = this.snapshotToArray(snapshot.val());
      this.setState({ items: itemsArray, loading: false });
    });
  }

  snapshotToArray = snapshot =>
    Object.entries(snapshot).map(e => Object.assign(e[1], { key: e[0] }));

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
    return <View padder>{this.renderItems()}</View>;
  }
}

const SpinnerView = styled.View`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export default HomeScreen;
