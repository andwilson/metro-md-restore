import React from "react";
import { Text, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";

class DonateScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Donate!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class InfoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Info!</Text>
      </View>
    );
  }
}

const DonateStack = createStackNavigator(
  {
    Donate: DonateScreen
  },
  {
    navigationOptions: {
      title: "DONATE!!!"
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      title: "HOME!!!"
    }
  }
);

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen
  },
  {
    navigationOptions: {
      title: "INFO!!!"
    }
  }
);

export default createBottomTabNavigator(
  {
    Donate: {
      screen: DonateStack,
      navigationOptions: {
        tabBarIcon: <Ionicons name="ios-gift" size={25} />
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: <Ionicons name="ios-home" size={25} />
      }
    },
    Info: {
      screen: InfoStack,
      navigationOptions: {
        tabBarIcon: <Ionicons name="ios-information-circle" size={25} />
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
