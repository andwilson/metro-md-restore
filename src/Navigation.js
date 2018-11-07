import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions
} from "react-navigation";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import InfoScreen from "./screens/InfoScreen";
import HomeScreen from "./screens/HomeScreen";
import DonateScreen from "./screens/DonateScreen";

import theme from "./theme";

const DonateStack = createStackNavigator(
  {
    Donate: DonateScreen
  },
  {
    navigationOptions: {
      title: "Donate"
    },
    cardStyle: { backgroundColor: theme.colors.light }
  }
);

const HomeDrawer = createDrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    contentComponent: () => {
      return (
        <View>
          <Text>Filters</Text>
        </View>
      );
    }
  }
);

const DrawerButton = props => (
  <TouchableOpacity
    onPress={() => {
      props.navigation.dispatch(DrawerActions.toggleDrawer());
    }}
    style={{ paddingRight: 15 }}
  >
    <MaterialCommunityIcons name="filter-variant" size={25} color="gray" />
  </TouchableOpacity>
);

const HomeStack = createStackNavigator(
  {
    Home: HomeDrawer
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Metro MD ReStore",
      headerRight: <DrawerButton navigation={navigation} />
    }),
    cardStyle: { backgroundColor: theme.colors.light }
  }
);

const InfoStack = createStackNavigator(
  {
    Info: InfoScreen
  },
  {
    navigationOptions: {
      title: "Information"
    },
    cardStyle: { backgroundColor: theme.colors.light }
  }
);

const TabNavigator = createBottomTabNavigator(
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
    initialRouteName: "Info",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#005596",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNavigator;
