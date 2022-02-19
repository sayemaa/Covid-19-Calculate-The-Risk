// app.js
import MapView, { PROVIDER_GOOGLE, Circle } from "react-native-maps";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 23.685,
          longitude: 90.3563,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        <Circle
          center={{ latitude: 23.685, longitude: 90.3563 }}
          radius={27470}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 20.5937, longitude: 78.9629 }}
          radius={447751}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 28.3949, longitude: 84.124 }}
          radius={11115}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 21.9162, longitude: 95.956 }}
          radius={17631}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 35.8617, longitude: 104.1954 }}
          radius={4849}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 15.87, longitude: 100.9925 }}
          radius={16498}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 30.3753, longitude: 69.3451 }}
          radius={27690}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 33.9391, longitude: 67.71 }}
          radius={155093}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 32.4279, longitude: 53.688 }}
          radius={119888}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
        <Circle
          center={{ latitude: 61.524, longitude: 105.3188 }}
          radius={201854}
          fillColor={"rgba(255,0,0, 0.5)"}
        ></Circle>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  body: {
    backgroundColor: "#0000ff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
});

export default Map;
