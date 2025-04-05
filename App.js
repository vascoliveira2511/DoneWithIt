import React, { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return (
    <GestureHandlerRootView styles={styles.container}>
      <ListingEditScreen />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
