import React, { Component } from "react";
import { View, Animated } from "react-native";
import { Text, Button } from "native-base";
import styled from "styled-components/native";
import * as firebase from "firebase";

import { Entypo, MaterialIcons, Foundation } from "@expo/vector-icons";
import theme from "../theme";

const AnimatedButton = Animated.createAnimatedComponent(Button);

class EditButton extends Component {
  state = {
    editButtonsOpen: false,
    sellButtonOpen: false,
    deleteButtonOpen: false,
    editButtonOpacity1: new Animated.Value(0),
    editButtonOpacity2: new Animated.Value(0),
    editButtonOpacity3: new Animated.Value(0),
    sellButtonWidth: new Animated.Value(120),
    sellButtonHeight: new Animated.Value(45),
    deleteButtonWidth: new Animated.Value(120),
    deleteButtonHeight: new Animated.Value(45)
  };

  toggleButtons = () => {
    const {
      editButtonsOpen,
      editButtonOpacity1,
      editButtonOpacity2,
      editButtonOpacity3
    } = this.state;
    if (!editButtonsOpen) {
      Animated.stagger(70, [
        Animated.timing(editButtonOpacity1, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(editButtonOpacity2, {
          toValue: 1,
          duration: 200
        }),
        Animated.timing(editButtonOpacity3, {
          toValue: 1,
          duration: 200
        })
      ]).start();
    } else {
      Animated.stagger(70, [
        Animated.timing(editButtonOpacity3, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(editButtonOpacity2, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(editButtonOpacity1, {
          toValue: 0,
          duration: 200
        })
      ]).start();
    }
    this.setState({ editButtonsOpen: !editButtonsOpen });
  };

  onSellPress = () => {
    const { sellButtonOpen, sellButtonWidth, sellButtonHeight } = this.state;
    if (!sellButtonOpen) {
      Animated.parallel([
        Animated.spring(sellButtonWidth, {
          toValue: 175
        }),
        Animated.spring(sellButtonHeight, {
          toValue: 100
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(sellButtonWidth, {
          toValue: 120
        }),
        Animated.spring(sellButtonHeight, {
          toValue: 45
        })
      ]).start();
    }
    this.setState({ sellButtonOpen: !sellButtonOpen });
  };

  onDeletePress = () => {
    const {
      deleteButtonOpen,
      deleteButtonWidth,
      deleteButtonHeight
    } = this.state;
    if (!deleteButtonOpen) {
      Animated.parallel([
        Animated.spring(deleteButtonWidth, {
          toValue: 175
        }),
        Animated.spring(deleteButtonHeight, {
          toValue: 100
        })
      ]).start();
    } else {
      Animated.parallel([
        Animated.spring(deleteButtonWidth, {
          toValue: 120
        }),
        Animated.spring(deleteButtonHeight, {
          toValue: 45
        })
      ]).start();
      firebase
        .database()
        .ref(`items/${this.props.item.key}`)
        .remove();
    }
    this.setState({ deleteButtonOpen: !deleteButtonOpen });
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
          <Animated.View
            style={{
              opacity: editButtonOpacity1,
              alignSelf: "flex-end"
            }}
          >
            <StyEditButton
              style={{
                backgroundColor: theme.colors.secondary,
                width: this.state.sellButtonWidth,
                height: this.state.sellButtonHeight
              }}
              onPress={this.onSellPress}
            >
              <Foundation
                style={{ flex: 1 }}
                name="dollar"
                size={29}
                color="white"
              />
              <Text style={{ flex: 2 }}>
                {this.state.sellButtonOpen ? "Mark as sold?" : "Sell"}
              </Text>
            </StyEditButton>
          </Animated.View>
          <Animated.View
            style={{
              opacity: editButtonOpacity2,
              alignSelf: "flex-end"
            }}
          >
            <StyEditButton
              warning
              onPress={() => {
                navigation.push("EditItem", item);
              }}
            >
              <MaterialIcons
                style={{ flex: 1 }}
                name="edit"
                size={22}
                color="white"
              />
              <Text style={{ flex: 2 }}>Edit</Text>
            </StyEditButton>
          </Animated.View>
          <Animated.View
            style={{
              opacity: editButtonOpacity3,
              alignSelf: "flex-end"
            }}
          >
            <StyEditButton
              danger
              style={{
                width: this.state.deleteButtonWidth,
                height: this.state.deleteButtonHeight
              }}
              onPress={this.onDeletePress}
            >
              <MaterialIcons
                style={{ flex: 1 }}
                name="delete-forever"
                size={25}
                color="white"
              />
              <Text style={{ flex: 2 }}>
                {this.state.deleteButtonOpen ? "Delete forever?" : "Delete"}
              </Text>
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

const StyEditButton = styled(AnimatedButton)`
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
