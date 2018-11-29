import React from "react";
import { Image, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Card, CardItem, Text, View, H2 } from "native-base";
import TimeAgo from "react-native-timeago";

import EditButton from "../components/EditButton";

const ItemCard = ({ item, loggedIn, navigation }) => {
  const { title, category, price, location, posted, description, image } = item;
  const postedTimestamp = new Date(posted);

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
          <ImageText>${price}</ImageText>
        </PriceView>
        <EditButton item={item} loggedIn={loggedIn} navigation={navigation} />
      </ImageContainer>
      <CardItem>
        <View style={{ lineHeight: 5 }}>
          <StyText note>{category}</StyText>
          <StyH2>{title}</StyH2>
          <StyText note>
            {location}
            {" – "}
            <Text note>
              <TimeAgo time={postedTimestamp} />
            </Text>
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

const ImageText = styled(Text)`
  color: white;
  font-weight: bold;
`;

export default ItemCard;
