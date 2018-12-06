import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  DrawerActions,
  createAppContainer
} from "react-navigation";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import InfoScreen from "./screens/InfoScreen";
import HomeScreen from "./screens/HomeScreen";
import DonateScreen from "./screens/DonateScreen";
import SignInScreen from "./screens/SignInScreen";
import Filters from "./components/Filters";
import AddItemScreen from "./screens/AddItemScreen";
import EditItemScreen from "./screens/EditItemScreen";

import logo from "../assets/habitat-logo-smallest.png";

import theme from "./theme";

const HomeDrawer = createDrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    // drawerWidth: 300,
    // drawerPosition: "left",
    contentComponent: ({ navigation }) => (
      <Filters
        // style={{ backgroundColor: "white", width: "100%", height: "100%" }}
        navigation={navigation}
      />
    )
  }
);

const DrawerButton = props => (
  <TouchableOpacity
    onPress={() => {
      // props.navigation.dispatch(DrawerActions.toggleDrawer());
      props.navigation.toggleDrawer();
    }}
    style={{ paddingRight: 15 }}
    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
  >
    <Ionicons name="ios-options" size={27} color="gray" />
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
    Home: {
      screen: HomeDrawer,
      navigationOptions: ({ navigation }) => ({
        title: "ReStore",
        headerRight: <DrawerButton navigation={navigation} />,
        headerLeft: <HeaderLogo />
      })
    },
    AddItem: {
      screen: AddItemScreen,
      navigationOptions: {
        title: "Add Item"
      }
    },
    EditItem: {
      screen: EditItemScreen,
      navigationOptions: {
        title: "Edit Item"
      }
    }
  },
  {
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
        tabBarLabel: "ReStore",
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
    // animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: "#005596",
      inactiveTintColor: "gray",
      scrollEnabled: false,
      removeClippedSubviews: true
    }
  }
);

const AppContainer = createAppContainer(TabNavigator)

export default AppContainer;
