import React from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import DefaultText from "./DefaultText";

import Colors from '../constants/Colors';

const SettingTile = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => console.log("works!")}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.mode}</Text>
        <DefaultText style={styles.subText}>{props.description}</DefaultText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: (Dimensions.get("window").width / 100) * 40,
    borderRadius: 16,
    marginVertical: 15,
    backgroundColor: Colors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontFamily: 'montserrat-bold'
  },
  subText: { fontSize: 20 },
});

export default SettingTile;
