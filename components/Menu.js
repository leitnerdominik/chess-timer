import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Menu = (props) => {
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity onPress={() => props.navigation.navigate("Settings")}>
        <Ionicons color="white" name="ios-settings" size={48} />
      </TouchableOpacity>
      {props.started ? (
        <TouchableOpacity onPress={props.pause}>
          <Ionicons color="white" name="ios-pause" size={48} />
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity onPress={props.reset}>
        <Ionicons color="white" name="reload-sharp" size={48} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    color: "white",
  },
});

export default Menu;
