import React, { Component } from "react";
import { FlatList } from "react-native";
import { Container, Content, Spinner, Fab } from "native-base";
import styled from "styled-components/native";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";

import theme from "../theme";

import ItemCard from "../components/ItemCard";

class HomeScreen extends Component {
  state = {
    items: [],
    loading: true,
    loggedIn: false
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("availableItems/");
    itemsRef.on("value", snapshot => {
      const itemsArray = this.snapshotToArray(snapshot.val());
      const sortedArray = itemsArray.sort((a, b) => {
        const dateA = new Date(a.posted);
        const dateB = new Date(b.posted);
        let comparison = 0;
        if (dateA > dateB) {
          comparison = -1;
        } else if (dateA < dateB) {
          comparison = 1;
        }
        return comparison;
      });
      this.setState({ items: sortedArray, loading: false });
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

  renderSpinner() {
    if (this.state.loading) {
      return (
        <SpinnerView>
          <Spinner color={theme.colors.primary} />
        </SpinnerView>
      );
    }
  }

  renderItems() {
    if (!this.state.loading) {
      const { items } = this.state;
      const { navigation } = this.props;
      const locationFilter = navigation.getParam("locationFilter", undefined);
      const categoryFilter = navigation.getParam("categoryFilter", undefined);
      const minPriceFilter = navigation.getParam("minPriceFilter", undefined);
      const maxPriceFilter = navigation.getParam("maxPriceFilter", undefined);
      const filteredItems = items.filter(item => {
        if (
          locationFilter &&
          locationFilter.includes(item.location) === false
        ) {
          return false;
        }
        if (
          categoryFilter &&
          categoryFilter.includes(item.category) === false
        ) {
          return false;
        }
        if (
          minPriceFilter &&
          parseInt(item.price) < parseInt(minPriceFilter)
        ) {
          return false;
        }
        if (
          maxPriceFilter &&
          parseInt(item.price) > parseInt(maxPriceFilter)
        ) {
          return false;
        }
        return true;
      });
      return (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredItems}
          renderItem={({ item }) => (
            <ItemCard
              item={item}
              key={item.key}
              navigation={this.props.navigation}
            />
          )}
        />
      );
    }
  }

  render() {
    return (
      <Container>
        {this.renderSpinner()}
        <Content padder>{this.renderItems()}</Content>
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

export default HomeScreen;
