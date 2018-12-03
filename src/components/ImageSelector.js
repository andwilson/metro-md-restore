import React, { Component } from "react";
import { Image } from "react-native";
import { View, Text, Button, Spinner } from "native-base";
import { Permissions, ImagePicker } from "expo";
import { FontAwesome } from "@expo/vector-icons";

import theme from "../theme";

class ImageSelector extends Component {
  onSelectImagePress = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    let result = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      quality: 0.5
    });
    this.props.uploadImage(result);
  };

  onTakePhotoPress = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    let result = await ImagePicker.launchCameraAsync({
      base64: true,
      quality: 0.5
    });
    this.props.uploadImage(result);
  };

  renderImage() {
    if (this.props.image) {
      return (
        <Image
          source={{ uri: this.props.image }}
          style={{ height: 200, width: 200, alignSelf: "center" }}
        />
      );
    } else if (this.props.uploading) {
      return (
        <Spinner
          color={theme.colors.primary}
          size="small"
          style={{ alignSelf: "center" }}
        />
      );
    }
    return (
      <View
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center"
        }}
      >
        <Button
          onPress={this.onSelectImagePress}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: 200,
            backgroundColor: theme.colors.secondary,
            marginBottom: 50
          }}
        >
          <FontAwesome name="photo" size={20} color="white" />
          <Text>Select an image</Text>
        </Button>
        <Button
          onPress={this.onTakePhotoPress}
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: 200,
            backgroundColor: theme.colors.secondary
          }}
        >
          <FontAwesome name="camera" size={20} color="white" />
          <Text>Take a photo</Text>
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View
        style={{
          display: "flex",
          width: "100%",
          height: 220,
          justifyContent: "center"
        }}
      >
        {this.renderImage()}
      </View>
    );
  }
}

export default ImageSelector;
