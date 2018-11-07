import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator
} from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      title: "Donate"
    }
  }
);

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: {
      title: "Metro MD ReStore",
      headerRight: (
        <TouchableOpacity
          onPress={() => console.log("Open filter drawer")}
          style={{ paddingRight: 15 }}
        >
          <MaterialCommunityIcons
            name="filter-variant"
            size={25}
            color="gray"
          />
        </TouchableOpacity>
      )
    }
  }
);

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen
  },
  {
    navigationOptions: {
      title: "More Info"
    }
  }
);

export default createBottomTabNavigator(
  {
    Info: {
      screen: InfoStack,
      navigationOptions: {
        tabBarLabel: "Info",
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons
            name={`information${focused ? "" : "-outline"}`}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Store",
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons
            name={`home${focused ? "" : "-outline"}`}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Donate: {
      screen: DonateStack,
      navigationOptions: {
        tabBarLabel: "Donate",
        tabBarIcon: ({ focused, tintColor }) => (
          <MaterialCommunityIcons
            name={`heart${focused ? "" : "-outline"}`}
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#005596",
      inactiveTintColor: "gray"
    }
  }
);
