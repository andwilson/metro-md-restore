import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card, CardItem, Text, View, H2 } from "native-base";
import TimeAgo from "react-native-timeago";

const ItemCard = ({ item }) => {
  const { title, category, price, location, posted, description, image } = item;
  return (
    <Card
      style={{
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
      }}
    >
      <ImageContainer>
        <Image
          source={{ uri: image }}
          style={{ resizeMode: "cover", height: "100%", width: "100%" }}
        />
        <PriceView>
          <PriceText>${price}</PriceText>
        </PriceView>
      </ImageContainer>
      <CardItem>
        <View style={{ lineHeight: 5 }}>
          <StyText note>{category}</StyText>
          <StyH2>{title}</StyH2>
          <StyText note>
            {location}
            {" – "}
            <Text note>
              <TimeAgo datetime={new Date(posted)} />
            </Text>
            {/* <Text note>{posted + "Z"}</Text> */}
          </StyText>
          <StyText note style={{ color: "black" }}>
            {description}
          </StyText>
        </View>
      </CardItem>
    </Card>
  );
};

const StyText = styled(Text)`
  margin-bottom: 4;
`;

const StyH2 = styled(H2)`
  margin-bottom: 4;
`;

const ImageContainer = styled(View)`
  width: 100%;
  height: ${Dimensions.get("window").width - 20};
  display: flex;
  justify-content: flex-end;
`;

const PriceView = styled(View)`
  position: absolute;
  padding-bottom: 10;
  padding-left: 10;
  padding-top: 10;
  padding-right: 10;
  left: 15;
  bottom: 15;
  background-color: black;
  border-radius: 5;
  opacity: 0.75;
`;

const PriceText = styled(Text)`
  color: white;
  font-weight: bold;
`;

export default ItemCard;
