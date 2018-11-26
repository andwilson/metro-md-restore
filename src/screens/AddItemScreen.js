import React, { Component } from "react";
import { Picker, Switch, Image } from "react-native";
import {
  View,
  Text,
  Card,
  CardItem,
  Input,
  Button,
  Spinner,
  Textarea,
  Content
} from "native-base";
import styled from "styled-components/native";
import { Permissions, ImagePicker } from "expo";
import * as firebase from "firebase";

import theme from "../theme";

import LeftRight from "../components/LeftRight";

const CATEGORIES = [
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

class AddItemScreen extends Component {
  state = {
    title: "",
    price: 0,
    RockvilleToggle: true,
    SilverSpringToggle: false,
    category: CATEGORIES[0],
    description: "",
    error: "",
    loading: false,
    image: null,
    uploading: false
  };

  async componentDidMount() {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    await Permissions.askAsync(Permissions.CAMERA);
  }

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: true,
      aspect: [1, 1]
    });
    // let result = await ImagePicker.launchCameraAsync({
    //   base64: true,
    //   allowsEditing: true,
    //   aspect: [1, 1]
    // });

    if (!result.cancelled) {
      this.setState({ uploading: true });
      fetch(
        "https://us-central1-metro-md-restore.cloudfunctions.net/storeImage",
        {
          method: "POST",
          body: JSON.stringify({
            image: result.base64
          })
        }
      )
        .catch(error => {
          console.log(error);
          this.setState({ uploading: false });
        })
        .then(res => res.json())
        .then(parsedRes => {
          console.log(parsedRes);
          this.setState({ image: parsedRes.imageUrl, uploading: false });
        });
    }
  };

  handleLocationToggle() {
    this.setState(state => ({
      RockvilleToggle: !state.RockvilleToggle,
      SilverSpringToggle: !state.SilverSpringToggle
    }));

    const location = this.state.RockvilleToggle ? "Rockville" : "Silver Spring";
    this.setState({ location });
    console.log(this.state.location);
  }

  onFormSubmit() {
    const { title, price, category, description, image } = this.state;
    // this.setState({ error: "", loading: true });

    const posted = new Date();
    const location = this.state.RockvilleToggle ? "Rockville" : "Silver Spring";

    // console.log(title, price, location, category, description, posted);

    firebase
      .database()
      .ref("/items")
      .push({ title, image, price, location, category, description, posted })
      .then(() => {
        this.setState({
          title: "",
          price: 0,
          RockvilleToggle: true,
          SilverSpringToggle: false,
          category: CATEGORIES[0],
          description: "",
          error: "",
          loading: false,
          uploading: false
        });
        this.props.navigation.goBack();
        this.props.navigation.navigate("Home");
      });
  }

  renderImage() {
    if (this.state.image) {
      return (
        <Image
          source={{ uri: this.state.image }}
          style={{ height: 200, width: 200 }}
        />
      );
    } else if (this.state.uploading) {
      return (
        <Spinner
          color={theme.colors.primary}
          size="small"
          style={{ alignSelf: "center" }}
        />
      );
    }
    return (
      <Button
        title="Choose image..."
        onPress={this.onChooseImagePress}
        style={{
          justifyContent: "center",
          width: "70%",
          backgroundColor: theme.colors.secondary
        }}
      >
        <Text>Choose image...</Text>
      </Button>
    );
  }

  renderButton() {
    if (this.state.loading) {
      return (
        <Spinner
          color={theme.colors.primary}
          size="small"
          style={{ alignSelf: "center" }}
        />
      );
    }
    return (
      <Button
        style={{
          justifyContent: "center",
          width: "100%",
          backgroundColor: theme.colors.primary
        }}
        onPress={this.onFormSubmit.bind(this)}
      >
        <Text>Add Item</Text>
      </Button>
    );
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem bordered>
            <Input
              label="Title"
              placeholder="What are you selling?"
              onChangeText={title => this.setState({ title })}
              value={this.props.title}
            />
          </CardItem>
          <CardItem bordered>{this.renderImage()}</CardItem>
          <CardItem bordered>
            <Input
              label="Price"
              placeholder="Price"
              onChangeText={price => this.setState({ price })}
              value={this.props.price}
            />
          </CardItem>
          <CardItem bordered>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%"
              }}
            >
              <Text>Location</Text>
              <LeftRight>
                <Text>Rockville</Text>
                <Switch
                  value={this.state.RockvilleToggle}
                  onValueChange={this.handleLocationToggle.bind(this)}
                  trackColor={theme.colors.secondary}
                />
              </LeftRight>
              <LeftRight>
                <Text>Silver Spring</Text>
                <Switch
                  value={this.state.SilverSpringToggle}
                  onValueChange={this.handleLocationToggle.bind(this)}
                  trackColor={theme.colors.secondary}
                />
              </LeftRight>
            </View>
          </CardItem>
          <CardItem bordered>
            <View style={{ flex: 1, flexDirection: "column", height: 220 }}>
              <Text>Category</Text>
              <Picker
                style={{ flex: 1 }}
                selectedValue={this.state.category}
                onValueChange={category => this.setState({ category })}
              >
                {CATEGORIES.map(category => (
                  <Picker.Item
                    label={category}
                    value={category}
                    key={category}
                  />
                ))}
              </Picker>
            </View>
          </CardItem>
          <CardItem bordered>
            <Textarea
              rowSpan={5}
              placeholder="Description (optional)"
              onChangeText={description => this.setState({ description })}
              value={this.props.description}
              style={{ width: "100%" }}
            />
          </CardItem>
          <ErrorText>{this.state.error}</ErrorText>
          <CardItem style={{ height: 80, justifyContent: "center" }}>
            {this.renderButton()}
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const ErrorText = styled(Text)`
  height: 20;
  margin-top: 10;
  align-self: center;
  font-weight: bold;
  color: red;
`;

export default AddItemScreen;
