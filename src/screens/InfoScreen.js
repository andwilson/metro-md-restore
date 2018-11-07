import React from "react";
import { View, Text, ScrollView } from "react-native";
import styled from "styled-components/native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { WebBrowser } from "expo";

import theme from "../theme";

const InfoScreen = () => (
  <ScrollView>
    <Container>
      <Intro>Everything you need to know about Metro Maryland ReStores</Intro>
      <Header>Store locations</Header>
      <View>
        <Text style={{ fontWeight: "bold", marginTop: 5 }}>Rockville</Text>
        <Text>1029 East Gude Dr.</Text>
        <Text>Rockville, MD 20850</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", marginTop: 10 }}>Silver Spring</Text>
        <Text>12006 Plum Orchard Dr.</Text>
        <Text>Silver Spring, MD 20904</Text>
      </View>
      <Header>Contact</Header>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Phone:</Text> 301-947-3304
      </Text>
      <Text style={{ marginTop: 2 }}>
        <Text style={{ fontWeight: "bold" }}>Email:</Text> ReStore@HabitatMM.org
      </Text>
      <Header>Hours</Header>
      <Text>Monday to Saturday: 9am to 6pm</Text>
      <Text>Sunday: 11am to 5pm</Text>
      <Header>About</Header>
      <Text>
        Habitat for Humanity ReStore® is a nonprofit retail outlet specializing
        in the resale of quality new and gently used furniture, antiques,
        appliances and building supplies. By taking in household goods and
        furniture donations, ReStore diverts tons of reusable materials from our
        local landfills. ReStore acts as a discount home improvement center as
        all items are sold to the public at deep discounts and all proceeds are
        used to fund the building of affordable housing in Montgomery and Prince
        George’s Counties. To shop with a purpose and support a good cause come
        visit our nonprofit retail outlet in Rockville and Silver Spring today!
      </Text>
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
            WebBrowser.openBrowserAsync("https://twitter.com/ReStoreMetroMD");
          }}
        />
      </Social>
    </Container>
    <Button onPress={() => console.log("Go to sign-in screen")}>
      <ButtonText>Admin sign-in</ButtonText>
    </Button>
  </ScrollView>
);

const Container = styled.View`
  flex: 1;
  padding-top: 20;
  padding-right: 20;
  padding-left: 20;
`;

const Intro = styled.Text`
  font-size: 16;
  font-weight: 200;
`;

const Header = styled.Text`
  font-size: 18;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
  color: ${props => props.theme.colors.primary};
`;

const Social = styled.View`
  flex: 1;
  margin-top: 30;
  margin-bottom: 30;
  flex-direction: row;
  justify-content: space-around;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondaryLight};
  margin-bottom: 50;
  padding-top: 15;
  padding-bottom: 15;
  align-content: center;
`;

const ButtonText = styled.Text`
  font-size: 16;
  font-weight: bold;
`;

export default InfoScreen;
