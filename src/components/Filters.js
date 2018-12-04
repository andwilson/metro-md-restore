import React, { Component } from "react";
import { Container, Content, Text, H3, Button, ListItem, Left, Right, CheckBox } from "native-base";
import styled from "styled-components/native";

import CategoryFilter from "../components/CategoryFilter";

import theme from "../theme";

class Filters extends Component {
  state = { location: "Rockville", category: "", priceMin: 0, priceMax: null };
  render() {
    return (
      <Container>
        <HeaderView>
          <Button bordered>
            <Text>RESET</Text>
          </Button>
          <H3>Filters</H3>
          <Button>
            <Text>APPLY</Text>
          </Button>
        </HeaderView>
        <Content padder>
          <H3 style={{ fontWeight: "200" }}>LOCATION</H3>
          <ListItem>
            <Left><Text>Rockville</Text></Left>
            <Right><CheckBox checked={true} /></Right>
          </ListItem>
          <ListItem>
          <Left><Text>Silver Spring</Text></Left>
            <Right><CheckBox checked={false} /></Right>
          </ListItem>
          {/* <H3 style={{ fontWeight: "200", marginTop: 15 }}>CATEGORIES</H3>
          <CategoryFilter /> */}
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
  margin-bottom: 10;
`;

export default Filters;
