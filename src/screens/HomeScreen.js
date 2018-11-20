import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Spinner, View, Button, Text, Fab } from "native-base";
import styled from "styled-components/native";
import { Actions } from "react-navigation";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";

import theme from "../theme";

import ItemCard from "../components/ItemCard";

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
        <Fab
          position="bottomRight"
          onPress={() => this.props.navigation.navigate("AddItem")}
          style={{ backgroundColor: theme.colors.primary }}
        >
          <Ionicons name="md-add" />
        </Fab>
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
        showsVerticalScrollIndicator={false}
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
      <Container padder>
        <View>{this.renderItems()}</View>
        {this.renderAddItem()}
      </Container>
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
