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
import ProgressInMedicineData from "./ProgressInMedicineData";
import { Transition, Transitioning } from "react-native-reanimated";

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

function ProgressInMedicine(props) {
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
          <Text style={styles.header}>Progress In Medicine</Text>
          <Text style={styles.description}>
            National regulatory authorities have granted emergency use
            authorizations for twenty-three COVID-19 vaccines. Six of those have
            been approved for emergency or full use by at least one
            WHO-recognized stringent regulatory authority (Sinopharm, Sinovac,
            AstraZeneca, PFIZER and Moderna).
          </Text>

          {ProgressInMedicineData.map(({ medicine, details }, index) => {
            return (
              <TouchableOpacity
                key={medicine}
                style={styles.medicineContainer}
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                activeOpacity={0.7}
              >
                <View style={[styles.card]}>
                  <Text style={[styles.medicines]}>{medicine}</Text>

                  {index === currentIndex && (
                    <View>
                      {details.map((details) => (
                        <Text key={details} style={[styles.details]}>
                          {details}
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

  medicineContainer: {
    paddingHorizontal: 15,
  },

  medicines: {
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

  details: {
    marginHorizontal: 25,
    textAlign: "justify",
    margin: 3,
  },
});

export default ProgressInMedicine;
