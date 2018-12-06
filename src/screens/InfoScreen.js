import React, { Component } from "react";
import styled from "styled-components/native";
import {
  Content,
  View,
  Text,
  Button,
  Card,
  CardItem,
  H1,
  H3
} from "native-base";
import * as firebase from "firebase";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { WebBrowser } from "expo";

import theme from "../theme";

class InfoScreen extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  LogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch(error => {
        console.log(error);
      });
  }

  renderSignIn() {
    if (this.state.loggedIn) {
      return (
        <StyButton block onPress={this.LogOut.bind(this)}>
          <Text>Log out</Text>
        </StyButton>
      );
    }
    return (
      <StyButton block onPress={() => this.props.navigation.navigate("SignIn")}>
        <Text>Admin sign-in</Text>
      </StyButton>
    );
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <StyH1>Store locations</StyH1>
          </CardItem>
          <CardItem>
            <View>
              <H3>Rockville</H3>
              <Text>1029 East Gude Dr.</Text>
              <Text>Rockville, MD 20850</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <H3>Silver Spring</H3>
              <Text>12006 Plum Orchard Dr.</Text>
              <Text>Silver Spring, MD 20904</Text>
            </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>Contact</StyH1>
          </CardItem>
          <CardItem>
            <View>
              <Text>
                <FontAwesome name="phone" size={15} />
                <Text>{"  "} 301-947-3304</Text>
              </Text>
              <Text style={{ marginTop: 5 }}>
                <MaterialCommunityIcons name="email" size={15} />
                {"  "}
                ReStore@HabitatMM.org
              </Text>
            </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>Hours</StyH1>
          </CardItem>
          <CardItem>
            <View>
              <Text>Monday to Saturday: 9am to 6pm</Text>
              <Text style={{ marginTop: 5 }}>Sunday: 11am to 5pm</Text>
            </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>About</StyH1>
          </CardItem>
          <CardItem>
            <Text>
              Habitat for Humanity ReStore® is a non-profit retail outlet
              specializing in the resale of quality new and gently used
              furniture, antiques, appliances and building supplies. By taking
              in household goods and furniture donations, ReStore diverts tons
              of reusable materials from our local landfills. ReStore acts as a
              discount home improvement center as all items are sold to the
              public at deep discounts and all proceeds are used to fund the
              building of affordable housing in Montgomery and Prince George’s
              Counties. To shop with a purpose and support a good cause come
              visit our non-profit retail outlet in Rockville and Silver Spring
              today!
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Social>
              <FontAwesome
                name="facebook-square"
                size={40}
                color="#3B5998"
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://www.facebook.com/restoremoco/?ref=br_rs"
                  );
                }}
              />
              <MaterialCommunityIcons
                name="web"
                size={40}
                color={theme.colors.primary}
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "http://habitatmm.org/restore-donation-center"
                  );
                }}
              />
              <FontAwesome
                name="twitter-square"
                size={40}
                color="#00aced"
                onPress={() => {
                  WebBrowser.openBrowserAsync(
                    "https://twitter.com/ReStoreMetroMD"
                  );
                }}
              />
            </Social>
          </CardItem>
        </Card>
        {this.renderSignIn()}
        <PrivacyPolicy
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "https://habitatmm.org/privacy-policy/"
            );
          }}
        >
          Privacy Policy
        </PrivacyPolicy>
      </Content>
    );
  }
}

const StyH1 = styled(H1)`
  color: ${props => props.theme.colors.primary};
`;

const PrivacyPolicy = styled.Text`
  align-self: center;
  color: ${theme.colors.dark};
  margin-bottom: 20;
`;

const Social = styled.View`
  flex: 1;
  margin-top: 30;
  margin-bottom: 30;
  flex-direction: row;
  justify-content: space-around;
`;

const StyButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 30;
  margin-bottom: 30;
`;

export default InfoScreen;
