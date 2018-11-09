import React, { Component } from "react";
import { Content } from "native-base";
import firebase from "firebase";

import ItemCard from "../components/ItemCard";

import data from "../data";

class HomeScreen extends Component {
  state = { items: [], loading: false };

  componentWillMount() {
    Object.values(data.items).map(item => console.log(item));
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
      <Content padder>
        {Object.values(data.items).map(item => <ItemCard item={item} key={item.title}/>)}
      </Content>
    );
  }
}

export default HomeScreen;
