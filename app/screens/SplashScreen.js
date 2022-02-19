import React from "react";
import { View, Image } from "react-native";
import "react-native-gesture-handler";

export default function splashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("WelcomeScreen");
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#082032",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 390, height: 100 }}
        source={require("../assets/logo.png")}
      ></Image>
    </View>
  );
}
