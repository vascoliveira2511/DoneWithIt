import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      style={{
        position: "absolute",
        alignSelf: "center",
        top: 300,
      }}
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
}

export default ActivityIndicator;
