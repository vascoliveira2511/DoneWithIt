import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
      style={styles.overlay}
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,

    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
