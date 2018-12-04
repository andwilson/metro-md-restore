import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  Text,
  H3,
  Button,
  ListItem,
  Left,
  Right,
  CheckBox
} from "native-base";
import { DrawerActions } from "react-navigation";
import styled from "styled-components/native";
import cloneDeep from "lodash/cloneDeep";

import theme from "../theme";

import { categories } from "../constants";
categories.sort();

const initialState = {
  locationFilter: ["Rockville", "Silver Spring"],
  categoryFilter: categories,
  minPriceFilter: 0,
  maxPriceFilter: null
};

class Filters extends Component {
  state = cloneDeep(initialState);

  onLocationChange = this.onLocationChange.bind(this);
  onLocationChange(locationName) {
    const { locationFilter } = this.state;
    const index = locationFilter.indexOf(locationName);
    if (index >= 0) {
      locationFilter.splice(index, 1);
      this.setState({ locationFilter });
    } else {
      locationFilter.push(locationName);
      this.setState({ locationFilter });
    }
  }

  onCategoryChange = this.onCategoryChange.bind(this);
  onCategoryChange(categoryName) {
    const { categoryFilter } = this.state;
    const index = categoryFilter.indexOf(categoryName);
    if (index >= 0) {
      categoryFilter.splice(index, 1);
      this.setState({ categoryFilter });
    } else {
      categoryFilter.push(categoryName);
      this.setState({ categoryFilter });
    }
    console.log(categoryFilter);
  }

  onSubmit = () => {
    const { locationFilter, categoryFilter } = this.state;
    const { navigation } = this.props;
    navigation.navigate("Home", { locationFilter, categoryFilter });
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  onReset = () => {
    this.setState(cloneDeep(initialState));
    console.log(this.state);
  };

  onClearCategories = () => {
    this.setState({ categoryFilter: [] });
  };

  render() {
    return (
      <Container>
        <HeaderView>
          <Button
            bordered
            onPress={this.onReset}
            style={{ borderColor: theme.colors.primary }}
          >
            <Text style={{ color: theme.colors.primary }}>RESET</Text>
          </Button>
          <H3>Filters</H3>
          <Button
            onPress={this.onSubmit}
            style={{ backgroundColor: theme.colors.primary }}
          >
            <Text>APPLY</Text>
          </Button>
        </HeaderView>
        <Content padder>
          <H3 style={{ fontWeight: "200", marginTop: 10 }}>LOCATION</H3>
          <ListItem>
            <Left>
              <Text>Rockville</Text>
            </Left>
            <Right>
              <CheckBox
                checked={this.state.locationFilter.includes("Rockville")}
                color={theme.colors.secondary}
                onPress={() => this.onLocationChange("Rockville")}
              />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Silver Spring</Text>
            </Left>
            <Right>
              <CheckBox
                checked={this.state.locationFilter.includes("Silver Spring")}
                color={theme.colors.secondary}
                onPress={() => this.onLocationChange("Silver Spring")}
              />
            </Right>
          </ListItem>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20
            }}
          >
            <H3 style={{ fontWeight: "200" }}>CATEGORY</H3>
            <Button
              bordered
              small
              onPress={this.onClearCategories}
              style={{ borderColor: theme.colors.primary }}
            >
              <Text style={{ color: theme.colors.primary }}>CLEAR</Text>
            </Button>
          </View>
          {categories.map(category => (
            <ListItem key={category}>
              <Left>
                <Text>{category}</Text>
              </Left>
              <Right>
                <CheckBox
                  checked={this.state.categoryFilter.includes(category)}
                  color={theme.colors.secondary}
                  onPress={() => this.onCategoryChange(category)}
                />
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${theme.colors.light};
  padding-top: 10;
  padding-bottom: 10;
  border-bottom-width: 1;
  border-bottom-color: ${theme.colors.medium};
`;

export default Filters;
