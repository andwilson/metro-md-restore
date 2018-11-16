import React, { Component } from "react";
import {
  View,
  Text,
  Card,
  CardItem,
  Input,
  Button,
  Spinner
} from "native-base";
import firebase from "firebase";

import theme from "../theme";

class SignInScreen extends Component {
  state = { email: "", password: "", error: "", loading: false };

  componentDidMount() {
    console.log(this.props.loggedIn);
  }

  onButtonPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email: "", password: "", error: "", loading: false });
        this.props.navigation.goBack();
        this.props.navigation.navigate("Home");
      })
      .catch(() =>
        this.setState({ error: "Login attempt failed", loading: false })
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
        onPress={this.onButtonPress.bind(this)}
      >
        <Text>Sign In</Text>
      </Button>
    );
  }

  render() {
    return (
      <View
        padder
        style={{ flex: 1, height: "100%", justifyContent: "center" }}
      >
        <Card>
          <CardItem bordered>
            <Input
              label="Email"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.props.email}
            />
          </CardItem>
          <CardItem bordered>
            <Input
              secureTextEntry
              label="Password"
              placeholder="Password"
              onChangeText={password => this.setState({ password })}
              value={this.props.password}
            />
          </CardItem>
          <Text
            style={{
              height: 20,
              marginTop: 10,
              alignSelf: "center",
              fontWeight: "bold",
              color: "red"
            }}
          >
            {this.state.error}
          </Text>
          <CardItem style={{ height: 80, justifyContent: "center" }}>
            {this.renderButton()}
          </CardItem>
        </Card>
      </View>
    );
  }
}

export default SignInScreen;
