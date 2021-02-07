import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const SettingTile = (props) => {
  return (
    <View style={styles.container}>
      <Text>Text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    height: Dimensions.get("window").width / 100 * 40,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 15,
  },
});

export default SettingTile;
