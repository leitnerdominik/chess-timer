import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import DefaultText from '../components/DefaultText';
import Colors from "../constants/Colors";

const deviceWidth = Dimensions.get("window").width;

const timerTile = (props) => {
  let containerClasses = [props.style, styles.tileContainer];

  if (props.lost) {
    containerClasses.push(styles.lost);
  } else if (props.active) {
    containerClasses.push(styles.active);
  }

  let textSize;
  if (props.children.length <= 5) {
    textSize = Math.floor((deviceWidth / 350) * 100);
  } else {
    textSize = Math.floor((deviceWidth / 350) * 72);
  }

  return (
    <TouchableOpacity activeOpacity={0.8} style={containerClasses} onPress={props.clicked}>
      <DefaultText style={{ fontSize: textSize }}>{props.children}</DefaultText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // elevation: 3,
  },
  active: {
    backgroundColor: Colors.primaryColor,
  },
  lost: {
    backgroundColor: Colors.lostColor,

  },
});

export default timerTile;
