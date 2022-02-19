import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import PolicySuccessfulCountriesData from "./PolicySuccessfulCountriesData";
import PolicyCountriesPredictedData from "./PolicyCountriesPredictedData";

import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

function Policy(props) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [currentIndex1, setCurrentIndex1] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.header}>Policy</Text>
          <Text style={styles.description}>
            The world has been profoundly affected by the coronavirus pandemic.
            Countries are taking unprecedented measures to combat the spread of
            the disease.
          </Text>

          <Text style={styles.heading}>
            Successful countries in beating Covid-19
          </Text>
          {PolicySuccessfulCountriesData.map(({ country, details }, index) => {
            return (
              <TouchableOpacity
                key={country}
                style={styles.questionsContainer}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.7}
              >
                <View style={[styles.card]}>
                  <Text style={[styles.questions]}>{country}</Text>

                  {index === currentIndex && (
                    <View>
                      {details.map((details) => (
                        <Text key={details} style={[styles.answer]}>
                          {details}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
          <Text style={styles.heading}>
            Countries predicted to be successful
          </Text>
          {PolicyCountriesPredictedData.map(({ question, answers }, index) => {
            return (
              <TouchableOpacity
                key={question}
                style={styles.questionsContainer}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex1(index === currentIndex1 ? null : index);
                }}
                activeOpacity={0.7}
              >
                <View style={[styles.card]}>
                  <Text style={[styles.questions]}>{question}</Text>

                  {index === currentIndex1 && (
                    <View>
                      {answers.map((answer) => (
                        <Text key={answer} style={[styles.answer]}>
                          {answer}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Transitioning.View>
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

  card: {
    flexGrow: 1,
  },

  questionsContainer: {
    paddingHorizontal: 15,
  },

  questions: {
    // backgroundColor: "#F3EFCC",
    backgroundColor: "#F8F0DF",
    marginHorizontal: 13,
    // marginRight: 50,
    margin: 8,
    padding: 10,
    textAlign: "left",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    color: "#22577A",
    fontWeight: "bold",
    overflow: "hidden",
  },

  answer: {
    marginHorizontal: 25,
    textAlign: "justify",
    margin: 3,
  },

  heading: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#22577A",
    color: "#F8F0DF",
    textAlign: "center",
    marginHorizontal: 26,
    padding: 10,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default Policy;
