import React from "react";
import { View, Text, ScrollView } from "react-native";
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
        301-926-4104 or filling out our{" "}
        <OpenWebPage
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "http://habitatmm.org/donation+pick+up"
            );
          }}
        >
          online form
        </OpenWebPage>
      </Text>
      <Header>Drop-off</Header>
      <Text>
        Drop-off your donation at Rockville or Silver Springs Mon-Sat 10am-5pm
        or Sun 12pm-4pm
      </Text>
      <Header>Questions?</Header>
      <Text>Call 301-926-4104 OR</Text>
      <Text>Email ReStore@HabitatMM.org</Text>
      <Header>What we accept</Header>
      <Text>
        <ItemTitle>Appliances All appliances accepted</ItemTitle>
        <ItemDetail>
          We are no longer able to accept dishwashers of any kind, or
          refrigerators over 10 years old.
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Area Rugs</ItemTitle>
        <ItemDetail>
          Must be under 11 feet in length, new or excellent condition
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Cabinets</ItemTitle>
        <ItemDetail>
          Must be complete units, sTextucturally intact; must have doors,
          shelving, display racks, etc.; single cabinets (pieces) will be taken
          on a case by case basis
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Flooring material</ItemTitle>
        <ItemDetail>
          Vinyl no less than 25 sq. ft., new hardwood complete boxes, ceramic
          tile no less than 25 square feet.&nbsp; We do not accept scraps of any
          kind of flooring materials, exception being reclaimed hardwood
          flooring, must be at least 90 square feet.
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>
          Furniture Sofas, love seats, coffee tables, bedroom furniture, dining
          room
        </ItemTitle>
        <ItemDetail>
          Must be in re-salable condition (no rips, stains or tears.)
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Household Items</ItemTitle>
        <ItemDetail>Must be clean and unbroken</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Lawnmowers &amp; Lawn Equipment</ItemTitle>
        <ItemDetail>Must be working with all parts</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>
          Lighting Kitchen/dining room chandeliers and sconces, compact
          florescent bulbs, lamps (standing/table top)
        </ItemTitle>
        <ItemDetail>Must be working with all parts</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Lumber</ItemTitle>
        <ItemDetail>
          Must be between 3 – 8 feet in length, we cannot accept lumber with
          nails
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Mirrors</ItemTitle>
        <ItemDetail>
          Mirrors with frames only. We do not accept unframed mirrors or glass
          due to safety risks
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Plumbing</ItemTitle>
        <ItemDetail>
          Must be complete, very clean, and in good condition; heavy duty faucet
          fixtures, faucets, parts, pedestal sinks, toilets (1.6 gallon/low
          flush only)
        </ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Roofing</ItemTitle>
        <ItemDetail>New only</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Small ElecTextonics</ItemTitle>
        <ItemDetail>Must be working with all parts</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Tools &amp; Hardware</ItemTitle>
        <ItemDetail>Must be working with all parts</ItemDetail>
      </Text>
      <Text>
        <ItemTitle>Windows</ItemTitle>
        <ItemDetail>We cannot accept sashes</ItemDetail>
      </Text>
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

const ItemTitle = styled.Text`
  font-weight: bold;
`;

const ItemDetail = styled.Text`
  color: ${props => props.theme.colors.dark};
`;

const OpenWebPage = styled.Text`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
`;

export default DonateScreen;
