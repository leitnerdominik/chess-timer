import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Timer from "../screens/Timer";
import Settings from "../screens/Settings";

import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";

const ChessNavigator = createStackNavigator(
  {
    Timer: {
      screen: Timer,
      navigationOptions: {
        headerShown: false,
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="dark-mode" iconName="ios-moon" />
          </HeaderButtons>
        ),
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.accentColor,
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "montserrat-bold",
      },
    },
  }
);

export default createAppContainer(ChessNavigator);
