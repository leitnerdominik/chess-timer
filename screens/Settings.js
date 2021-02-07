import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import SettingTile from "../components/SettingTile";
import Colors from "../constants/Colors";

const timeModes = [
  {
    mode: "Custom",
  },
  {
    mode: "1 + 0",
    name: "Bullet",
  },
  {
    mode: "2 + 1",
    name: "Bullet",
  },
  {
    mode: "3 + 0",
    name: "Blitz",
  },
  {
    mode: "3 + 2",
    name: "Blitz",
  },
  {
    mode: "5 + 0",
    name: "Blitz",
  },
  {
    mode: "5 + 3",
    name: "Blitz",
  },
  {
    mode: "10 + 0",
    name: "Rapid",
  },
  {
    mode: "10 + 5",
    name: "Rapid",
  },
  {
    mode: "15 + 10",
    name: "Rapid",
  },
  {
    mode: "30 + 0",
    name: "Classical",
  },
  {
    mode: "30 + 20",
    name: "Classical",
  },
];

const Settings = (props) => {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={styles.listContainer}>
        {timeModes.map((m) => (
          <SettingTile key={m.mode} mode={m.mode} description={m.name} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
  listContainer: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});

export default Settings;
