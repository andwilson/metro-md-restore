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
  minPriceFilter: undefined,
  maxPriceFilter: undefined
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
  }

  onSubmit = () => {
    const { navigation } = this.props;
    navigation.navigate("Home", this.state);
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  onReset = () => {
    this.setState(cloneDeep(initialState));
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
            style={{ borderColor: theme.colors.primary, width: 80 }}
          >
            <Text style={{ color: theme.colors.primary }}>RESET</Text>
          </Button>
          <H3>Filters</H3>
          <Button
            onPress={this.onSubmit}
            style={{ backgroundColor: theme.colors.primary, width: 80 }}
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
                hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
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
                hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
              />
            </Right>
          </ListItem>
          <H3 style={{ fontWeight: "200", marginTop: 20 }}>PRICE RANGE</H3>
          <ListItem style={{ paddingRight: 0 }}>
            <Left>
              <Text>Min</Text>
            </Left>
            <Right
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ marginRight: 5, color: theme.colors.dark }}>
                $
              </Text>
              <MinMaxInput
                label="minPriceFilter"
                onChangeText={minPriceFilter =>
                  this.setState({ minPriceFilter })
                }
                value={this.state.minPriceFilter}
                keyboardType="number-pad"
                returnKeyType="done"
                clearTextOnFocus
                textAlign="center"
              />
            </Right>
          </ListItem>
          <ListItem style={{ paddingRight: 0 }}>
            <Left>
              <Text>Max</Text>
            </Left>
            <Right
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              <Text style={{ marginRight: 5, color: theme.colors.dark }}>
                $
              </Text>
              <MinMaxInput
                label="maxPriceFilter"
                onChangeText={maxPriceFilter =>
                  this.setState({ maxPriceFilter })
                }
                value={this.state.maxPriceFilter}
                keyboardType="number-pad"
                returnKeyType="done"
                clearTextOnFocus
                textAlign="center"
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
              style={{ borderColor: theme.colors.primary, width: 80 }}
              hitSlop={{ top: 10, bottom: 3, left: 5, right: 5 }}
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
                  hitSlop={{ top: 15, bottom: 15, left: 20, right: 20 }}
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

const MinMaxInput = styled.TextInput`
  display: flex;
  align-items: center;
  border-width: 1;
  border-color: ${theme.colors.medium};
  background-color: ${theme.colors.light};
  width: 80;
  border-radius: 5;
  height: 30;
  color: ${theme.colors.dark};
`;

export default Filters;
