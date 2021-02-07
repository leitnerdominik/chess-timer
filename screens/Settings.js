import React from "react";
import { View, StyleSheet } from "react-native";

import SettingTile from '../components/SettingTile';

const Settings = (props) => {
  return (
    <View style={styles.settingsContainer}>
      <SettingTile />
      <SettingTile />
      <SettingTile />
      <SettingTile />
    </View>
  );
};

const styles = StyleSheet.create({
  settingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap'
  }
})

export default Settings;
