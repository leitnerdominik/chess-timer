import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

const timerTile = (props) => {
  let containerClasses = [styles.tileContainer, props.style];

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
      <Text style={{ fontSize: textSize }}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  whiteTile: {
    backgroundColor: "white",
  },
  blackTile: {
    backgroundColor: "black",
  },
  active: {
    // backgroundColor: "#f0932b",
    backgroundColor: "#0097e6",
  },
  lost: {
    backgroundColor: "#e84118",
  },
});

export default timerTile;
