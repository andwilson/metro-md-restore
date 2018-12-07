import React, { Component } from "react";
import { Linking } from "react-native";
import { Content, View, Text, Button, Card, CardItem, H1 } from "native-base";
import styled from "styled-components/native";

import { itemsAccepted } from "../constants";

class DonateScreen extends Component {
  static navigationOptions = {
    title: "Donate"
  };

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Intro>
              ReStore® can’t succeed without your donations. Plus, they’re tax
              deductible by law. Schedule a pick-up or drop-off today.
            </Intro>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>Pick-up</StyH1>
          </CardItem>
          <CardItem>
            <Text>
              Schedule a truck to pick-up your donation for free by calling
              301-926-4104 or filling out our online form
            </Text>
          </CardItem>
          <CardItem>
            <StyButton
              block
              onPress={() =>
                Linking.openURL("http://habitatmm.org/donation+pick+up")
              }
            >
              <Text>Pick-up form</Text>
            </StyButton>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>Drop-off</StyH1>
          </CardItem>
          <CardItem>
            <Text>
              Drop-off your donation at Rockville or Silver Springs Mon-Sat
              10am-5pm or Sun 12pm-4pm
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>Questions?</StyH1>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Phone:</Text> 301-926-4104
            </Text>
          </CardItem>
          <CardItem>
            <Text>
              <Text style={{ fontWeight: "bold" }}>Email:</Text>{" "}
              ReStore@HabitatMM.org
            </Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <StyH1>What we accept</StyH1>
          </CardItem>
          {itemsAccepted.map(item => (
            <CardItem key={item.title}>
              <View>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDetail>{item.detail}</ItemDetail>
              </View>
            </CardItem>
          ))}
        </Card>
        {/* disabled due to accepting donations in Apple App Store */}
        <Card>
          <CardItem>
            <StyH1>Other donations</StyH1>
          </CardItem>
          <CardItem>
            <Text>
              You can also help by making{" "}
              <OpenWebPage
                onPress={() =>
                  Linking.openURL(
                    "https://interland3.donorperfect.net/weblink/weblink.aspx?name=E11222&id=1"
                  )
                }
              >
                monetary donations
              </OpenWebPage>{" "}
              or by{" "}
              <OpenWebPage
                onPress={() =>
                  Linking.openURL("http://habitatmm.org/restore-volunteer")
                }
              >
                volunteering
              </OpenWebPage>{" "}
              your time
            </Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const StyH1 = styled(H1)`
  color: ${props => props.theme.colors.primary};
`;

const Intro = styled.Text`
  font-size: 18;
  font-weight: 200;
`;

const ItemTitle = styled.Text`
  font-weight: bold;
`;

const ItemDetail = styled.Text`
  /* color: ${props => props.theme.colors.dark}; */
  margin-top: 2;
  margin-bottom: 10;
`;

const OpenWebPage = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
`;

const StyButton = styled(Button)`
  background-color: ${props => props.theme.colors.secondary};
  width: 100%;
`;

export default DonateScreen;
