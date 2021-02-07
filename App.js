import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import ChessNavigator from "./navigation/ChessNavigatior";

const fetchFonts = async () => {
  await Font.loadAsync({
    montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
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
