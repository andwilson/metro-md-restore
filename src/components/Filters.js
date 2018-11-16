import React, { Component } from "react";
import { Switch } from "react-native";
import styled from "styled-components/native";
import { Container, Content, View, Text, H3, Button } from "native-base";

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

export default Filters;
