import React from "react";
import { TouchableOpacity } from "react-native";
import {
  Scene,
  Router,
  Actions,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox
} from "react-native-router-flux";

import InfoScreen from "./screens/InfoScreen";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import DonateScreen from "./screens/DonateScreen";
import AddItemScreen from "./screens/AddItemScreen";
import Filters from "./components/Filters";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import theme from "./theme";

const DrawerButton = () => (
  <TouchableOpacity
    onPress={() => {
      Actions.Filters;
    }}
    style={{ paddingRight: 15 }}
  >
    <MaterialCommunityIcons name="filter-variant" size={25} color="gray" />
  </TouchableOpacity>
);

const InfoIcon = ({ focused, tintColor }) => (
  <MaterialCommunityIcons
    name={`information${focused ? "" : "-outline"}`}
    size={25}
    color={tintColor}
  />
);

const HomeIcon = ({ focused, tintColor }) => (
  <MaterialCommunityIcons
    name={`home${focused ? "" : "-outline"}`}
    size={25}
    color={tintColor}
  />
);

const DonateIcon = ({ focused, tintColor }) => (
  <MaterialCommunityIcons
    name={`heart${focused ? "" : "-outline"}`}
    size={25}
    color={tintColor}
  />
);

const AppNavigator = () => (
  <Router>
    <Scene key="root">
      <Tabs
        key="tabbar"
        activeTintColor={theme.colors.primary}
        inactiveTintColor="gray"
        showLabel={false}
        hideNavBar
      >
        <Stack key="InfoStack" title="Info" icon={InfoIcon}>
          <Scene
            key="InfoScreen"
            component={InfoScreen}
            title="Information"
            initial
          />
          <Scene key="SignInScreen" component={SignInScreen} title="Admin" />
        </Stack>
        <Stack key="HomeStack" tabBarLabel="Home" icon={HomeIcon} initial>
          <Scene
            key="HomeScreen"
            component={HomeScreen}
            title="ReStore Metro MD"
            renderRightButton={DrawerButton}
            initial
          />
          <Drawer key="Filters" component={Filters} />
        </Stack>
        <Scene
          key="DonateScreen"
          component={DonateScreen}
          title="Donate"
          icon={DonateIcon}
        />
      </Tabs>
    </Scene>
  </Router>
);

export default AppNavigator;
