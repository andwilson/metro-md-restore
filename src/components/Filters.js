import React, { Component } from "react";
import { Switch } from "react-native";
import { Container, Content, Text, H3, Button } from "native-base";

import LeftRight from "./LeftRight";
import CategoryFilter from "../components/CategoryFilter";

import theme from "../theme";

class Filters extends Component {
  state = { location: "Rockville", category: "", priceMin: 0, priceMax: null };
  render() {
    return (
      <Container>
        <LeftRight style={{ backgroundColor: theme.colors.light }}>
          <H3>Filters</H3>
          <Button bordered>
            <Text>Clear</Text>
          </Button>
        </LeftRight>
        <Content padder>
          <H3 style={{ fontWeight: "200", marginTop: 15 }}>LOCATION</H3>
          <LeftRight>
            <Text>Rockville</Text>
            <Switch />
          </LeftRight>
          <LeftRight>
            <Text>Silver Spring</Text>
            <Switch />
          </LeftRight>
          <H3 style={{ fontWeight: "200", marginTop: 15 }}>CATEGORIES</H3>
          <CategoryFilter />
          <Button block style={{ backgroundColor: theme.colors.secondary }}>
            <Text>SUBMIT</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Filters;
