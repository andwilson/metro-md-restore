import React, { Component } from "react";
import { View, Animated } from "react-native";
import { Text, Button } from "native-base";
import styled from "styled-components/native";

import { Entypo, MaterialIcons, Foundation } from "@expo/vector-icons";
import theme from "../theme";

class EditButton extends Component {
  state = {
    toggleOpen: false,
    editButtonOpacity1: new Animated.Value(0),
    editButtonOpacity2: new Animated.Value(0),
    editButtonOpacity3: new Animated.Value(0)
  };

  toggleButtons = () => {
    if (!this.state.toggleOpen) {
      Animated.stagger(70, [
        Animated.timing(this.state.editButtonOpacity1, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.editButtonOpacity2, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(this.state.editButtonOpacity3, {
          toValue: 1,
          duration: 200
        })
      ]).start();
    } else {
      Animated.stagger(70, [
        Animated.timing(this.state.editButtonOpacity3, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.editButtonOpacity2, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(this.state.editButtonOpacity1, {
          toValue: 0,
          duration: 200
        })
      ]).start();
    }
    this.setState({ toggleOpen: !this.state.toggleOpen });
  };

  render() {
    const { item, loggedIn, navigation } = this.props;
    const {
      editButtonOpacity1,
      editButtonOpacity2,
      editButtonOpacity3
    } = this.state;
    if (loggedIn) {
      return (
        <Container>
          <StyDotsButton onPress={this.toggleButtons}>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </StyDotsButton>
          <Animated.View style={{ opacity: editButtonOpacity1 }}>
            <StyEditButton style={{ backgroundColor: theme.colors.secondary }}>
              <Foundation
                style={{ flex: 1 }}
                name="dollar"
                size={29}
                color="white"
              />
              <Text style={{ flex: 2 }}>Sell</Text>
            </StyEditButton>
          </Animated.View>
          <Animated.View style={{ opacity: editButtonOpacity2 }}>
            <StyEditButton warning>
              <MaterialIcons
                style={{ flex: 1 }}
                name="edit"
                size={22}
                color="white"
              />
              <Text style={{ flex: 2 }}>Edit</Text>
            </StyEditButton>
          </Animated.View>
          <Animated.View style={{ opacity: editButtonOpacity3 }}>
            <StyEditButton
              danger
              onPress={() => {
                navigation.push("EditItem", item);
              }}
            >
              <MaterialIcons
                style={{ flex: 1 }}
                name="delete-forever"
                size={25}
                color="white"
              />
              <Text style={{ flex: 2 }}>Delete</Text>
            </StyEditButton>
          </Animated.View>
        </Container>
      );
    } else {
      return null;
    }
  }
}

const Container = styled.View`
  flex: 1;
  position: absolute;
  top: 15;
  right: 15;
`;

const StyDotsButton = styled(Button)`
  justify-content: center;
  align-self: flex-end;
  width: 45;
  height: 35;
  background-color: ${theme.colors.primary};
  shadow-color: black;
  shadow-offset: 0 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

const StyEditButton = styled(Button)`
  justify-content: flex-start;
  width: 120;
  height: 45;
  margin-top: 5;
  padding-left: 10;
  shadow-color: black;
  shadow-offset: 0 1px;
  shadow-opacity: 0.3;
  shadow-radius: 2;
`;

export default EditButton;
