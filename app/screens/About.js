import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";

function About() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.header}>About</Text>
          <Text style={styles.description}>
            We are team CodeX and we are taking part in the Nasa Space App
            Challenge. We made an app based on Covid-19: Calculate the risk
            category. With Covid-19 quickly engulfing the world, it's getting
            tough to keep up with the updates, such as which area has Covid
            spread the most and what is the percentage risk. To check on the go,
            we are bringing you a one-stop solution with all information you
            need to know in the palm of your hand.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#BFD8B8",
    backgroundColor: "#79B4B7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  header: {
    fontSize: 20,
    fontWeight: "bold",
    // backgroundColor: "#32502E",
    backgroundColor: "#22577A",
    color: "#F8F0DF",
    // color: "#F3EFCC",
    textAlign: "center",
    marginHorizontal: 20,
    padding: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: "hidden",
  },

  description: {
    marginHorizontal: 13,
    margin: -5,
    padding: 10,
    textAlign: "justify",
    // color: "#fcdede",
  },
});

export default About;
