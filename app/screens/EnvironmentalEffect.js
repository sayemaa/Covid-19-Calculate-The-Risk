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
import EnvironmentalEffectData from "./EnvironmentalEffectData";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

function EnvironmentalEffect(props) {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={styles.container}
    >
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.header}>Environmental Effect</Text>
          <Text style={styles.description}>
            COVID-19 is a widespread pandemic of our time. The pandemic
            (COVID-19) has also indicated the importance of focusing on another
            global crisis, i.e. climate change. The abrupt attack by COVID-19 is
            related to a more serious global climate crisis. Researchers are
            trying to explore the relationship between COVID-19 and climate
            change.
          </Text>

          <Text style={styles.description}>
            The following are some of the most frequently asked questions about
            the environment and COVID-19:
          </Text>
          {EnvironmentalEffectData.map(({ question, answers }, index) => {
            return (
              <TouchableOpacity
                key={question}
                style={styles.questionsContainer}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.7}
              >
                <View style={[styles.card]}>
                  <Text style={[styles.questions]}>{question}</Text>

                  {index === currentIndex && (
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
});

export default EnvironmentalEffect;
