import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const DrawerButton = () => (
  <TouchableOpacity
    onPress={() => {
      Actions.drawerOpen();
    }}
    style={{ paddingRight: 15 }}
  >
    <MaterialCommunityIcons name="filter-variant" size={25} color="gray" />
  </TouchableOpacity>
);

// class DrawerButton extends Component {
//   // state = {  }
//   render() {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           Actions.drawerOpen();
//         }}
//         style={{ paddingRight: 15 }}
//       >
//         <MaterialCommunityIcons name="filter-variant" size={25} color="gray" />
//       </TouchableOpacity>
//     );
//   }
// }

// class DrawerButton extends Component {
//   state = { drawerOpen: false };

//   onButtonPress() {
//     this.state.drawerOpen ? Actions.drawerClose() : Actions.drawerOpen();
//     this.setState(prevState => ({
//       drawerOpen: !prevState.drawerOpen
//     }));
//   }

//   render() {
//     return (
//       <TouchableOpacity
//         onPress={this.onButtonPress.bind(this)}
//         style={{ paddingRight: 15 }}
//       >
//         <MaterialCommunityIcons name="filter-variant" size={25} color="gray" />
//       </TouchableOpacity>
//     );
//   }
// }

export default DrawerButton;
