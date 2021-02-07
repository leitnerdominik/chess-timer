import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import ChessNavigator from './navigation/ChessNavigatior';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChessNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
