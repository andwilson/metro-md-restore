import React from "react";
import { ScrollView } from "react-native";
import { Text, Button } from "native-base";
import { WebBrowser } from "expo";
import styled from "styled-components/native";

const DonateScreen = () => (
  <ScrollView>
    <Container>
      <Intro>
        ReStore® can’t succeed without your donations. Plus, they’re tax
        deductible by law. Schedule a pick-up or drop-off today.
      </Intro>
      <Header>Pick-up</Header>
      <Text>
        Schedule a truck to pick-up your donation for free by calling
        301-926-4104 or filling out our online form
      </Text>
      <StyButton
        block
        onPress={() => {
          WebBrowser.openBrowserAsync("http://habitatmm.org/donation+pick+up");
        }}
      >
        <Text>Pick-up form</Text>
      </StyButton>
      <Header>Drop-off</Header>
      <Text>
        Drop-off your donation at Rockville or Silver Springs Mon-Sat 10am-5pm
        or Sun 12pm-4pm
      </Text>
      <Header>Questions?</Header>
      <Text>
        <Text style={{ fontWeight: "bold" }}>Phone:</Text> 301-926-4104
      </Text>
      <Text style={{ marginTop: 2 }}>
        <Text style={{ fontWeight: "bold" }}>Email:</Text> ReStore@HabitatMM.org
      </Text>
      <Header>What we accept</Header>
      <ItemTitle>Appliances All appliances accepted</ItemTitle>
      <ItemDetail>
        We are no longer able to accept dishwashers of any kind, or
        refrigerators over 10 years old.
      </ItemDetail>
      <ItemTitle>Area Rugs</ItemTitle>
      <ItemDetail>
        Must be under 11 feet in length, new or excellent condition
      </ItemDetail>
      <ItemTitle>Cabinets</ItemTitle>
      <ItemDetail>
        Must be complete units, sucturally intact; must have doors, shelving,
        display racks, etc.; single cabinets (pieces) will be taken on a case by
        case basis
      </ItemDetail>
      <ItemTitle>Flooring material</ItemTitle>
      <ItemDetail>
        Vinyl no less than 25 sq. ft., new hardwood complete boxes, ceramic tile
        no less than 25 square feet.&nbsp; We do not accept scraps of any kind
        of flooring materials, exception being reclaimed hardwood flooring, must
        be at least 90 square feet.
      </ItemDetail>
      <ItemTitle>
        Furniture Sofas, love seats, coffee tables, bedroom furniture, dining
        room
      </ItemTitle>
      <ItemDetail>
        Must be in re-salable condition (no rips, stains or tears.)
      </ItemDetail>
      <ItemTitle>Household Items</ItemTitle>
      <ItemDetail>Must be clean and unbroken</ItemDetail>
      <ItemTitle>Lawnmowers &amp; Lawn Equipment</ItemTitle>
      <ItemDetail>Must be working with all parts</ItemDetail>
      <ItemTitle>
        Lighting Kitchen/dining room chandeliers and sconces, compact florescent
        bulbs, lamps (standing/table top)
      </ItemTitle>
      <ItemDetail>Must be working with all parts</ItemDetail>
      <ItemTitle>Lumber</ItemTitle>
      <ItemDetail>
        Must be between 3 – 8 feet in length, we cannot accept lumber with nails
      </ItemDetail>
      <ItemTitle>Mirrors</ItemTitle>
      <ItemDetail>
        Mirrors with frames only. We do not accept unframed mirrors or glass due
        to safety risks
      </ItemDetail>
      <ItemTitle>Plumbing</ItemTitle>
      <ItemDetail>
        Must be complete, very clean, and in good condition; heavy duty faucet
        fixtures, faucets, parts, pedestal sinks, toilets (1.6 gallon/low flush
        only)
      </ItemDetail>
      <ItemTitle>Roofing</ItemTitle>
      <ItemDetail>New only</ItemDetail>
      <ItemTitle>Small ElecTextonics</ItemTitle>
      <ItemDetail>Must be working with all parts</ItemDetail>
      <ItemTitle>Tools &amp; Hardware</ItemTitle>
      <ItemDetail>Must be working with all parts</ItemDetail>
      <ItemTitle>Windows</ItemTitle>
      <ItemDetail>We cannot accept sashes</ItemDetail>
      <Header>Other donations</Header>
      <Text>
        You can also help by making{" "}
        <OpenWebPage
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "https://interland3.donorperfect.net/weblink/weblink.aspx?name=E11222&id=1"
            );
          }}
        >
          monetary donations
        </OpenWebPage>{" "}
        or by{" "}
        <OpenWebPage
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "http://habitatmm.org/restore-volunteer"
            );
          }}
        >
          volunteering
        </OpenWebPage>{" "}
        your time
      </Text>
    </Container>
  </ScrollView>
);

const Container = styled.View`
  flex: 1;
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`;

const Intro = styled.Text`
  font-size: 18;
  font-weight: 200;
`;

const Header = styled.Text`
  font-size: 18;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
  color: ${props => props.theme.colors.primary};
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
  margin-top: 20;
  margin-bottom: 15;
`;

export default DonateScreen;
