import React, { Component } from "react";
import { Switch } from "react-native";
import { View, Text } from "native-base";
import styled from "styled-components/native";

class CategoryFilter extends Component {
  state = {};

  categories = [
    "Plumbing",
    "Tools",
    "Donations",
    "Holiday",
    "Hardware",
    "Flooring",
    "Lumber",
    "Doors",
    "Home Decor",
    "Glass Case",
    "Tile",
    "Cabinets",
    "Windows",
    "Media",
    "HVAC",
    "Lighting",
    "Furniture",
    "Sports",
    "Luggage",
    "Electronics",
    "Electrical",
    "Rugs/Carpeting"
  ];

  render() {
    return (
      <View>
        {this.categories.map(category => (
          <LeftRight key={category}>
            <Text>{category}</Text>
            <Switch />
          </LeftRight>
        ))}
      </View>
    );
  }
}

const LeftRight = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
`;

export default CategoryFilter;
