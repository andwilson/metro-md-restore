import React from "react";
import { View, Text } from "react-native";
import { WebBrowser } from "expo";
import styled, { ThemeProvider } from "styled-components/native";

const theme = {
  test: "blue"
};

const DonateScreen = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Text>
        ReStore® can’t succeed without your donations. Plus, they’re tax
        deductible by law. Schedule a pick-up or drop-off today.
      </Text>
      <Header>Pick-up</Header>
      <Text>
        Schedule a truck to pick-up your donation for free by calling
        301-926-4104 or filling out our{" "}
        <Text
          onPress={() => {
            WebBrowser.openBrowserAsync(
              "http://habitatmm.org/donation+pick+up"
            );
          }}
        >
          online form
        </Text>
      </Text>
    </Container>
  </ThemeProvider>
);

const Container = styled.View`
  padding-top: 20;
  padding-right: 20;
  padding-bottom: 20;
  padding-left: 20;
`;

const Header = styled.Text`
  font-size: 20;
  font-weight: bold;
  margin-top: 20;
  margin-bottom: 5;
  color: ${props => props.theme.test};
`;

export default DonateScreen;
