import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
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
import SignInScreen from "./screens/SignInScreen";
import Filters from "./components/Filters";

import logo from "../assets/habitat-logo-smallest.png";

import theme from "./theme";

const HomeDrawer = createDrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    contentComponent: () => <Filters />
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

const HeaderLogo = () => (
  <View style={{ marginLeft: -20, height: 28, display: "flex" }}>
    <Image
      source={logo}
      style={{ flex: 1, height: 100, resizeMode: "contain" }}
    />
  </View>
);

const HomeStack = createStackNavigator(
  {
    Home: HomeDrawer
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "Metro MD ReStore",
      headerRight: <DrawerButton navigation={navigation} />,
      headerLeft: <HeaderLogo />
    }),
    cardStyle: { backgroundColor: theme.colors.light }
  }
);

const InfoStack = createStackNavigator(
  {
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        title: "Information",
        headerLeft: <HeaderLogo />
      }
    },
    SignIn: {
      screen: SignInScreen,
      navigationOptions: {
        title: "Admin"
      }
    }
  },
  {
    cardStyle: { backgroundColor: theme.colors.light }
  }
);

const DonateStack = createStackNavigator(
  {
    Donate: DonateScreen
  },
  {
    navigationOptions: {
      title: "Donate",
      headerLeft: <HeaderLogo />
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
    initialRouteName: "Home",
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#005596",
      inactiveTintColor: "gray"
    }
  }
);

export default TabNavigator;
