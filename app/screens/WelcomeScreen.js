import React from "react";
import axios from "axios";
import { Image, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    this.getApiData();
  }

  async getApiData() {
    let resp = await axios.get("https://coronavirus-19-api.herokuapp.com/all");
    // console.warn(resp.data);
    this.setState({ data: resp.data });
  }

  render() {
    return (
      <View
        style={styles.container}
        // source={require("../assets/Black-Screen-Background.jpg")}
      >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <View style={styles.update}>
          <Text
            style={{
              color: "#FFEBA1",
              // color: "#406343",
              fontSize: 20,
              paddingBottom: 5,
              fontWeight: "bold",
            }}
          >
            Cases: {this.state.data.cases}
          </Text>
          <Text
            style={{
              color: "#FF7878",
              fontSize: 20,
              paddingBottom: 5,
              fontWeight: "bold",
            }}
          >
            Deaths: {this.state.data.deaths}
          </Text>
          <Text style={{ color: "#57CC99", fontSize: 20, fontWeight: "bold" }}>
            Recovered: {this.state.data.recovered}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.map}
          onPress={() => this.props.navigation.navigate("Map")}
        >
          <Text style={styles.mapStyle}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.progressInMedicine}
          onPress={() => this.props.navigation.navigate("Medicine")}
        >
          <Text style={styles.progressInMedicineStyle}>
            Progress In Medicine
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.economicalEffect}
          onPress={() => this.props.navigation.navigate("EnvironmentalEffect")}
        >
          <Text style={styles.economicalEffectStyle}>Environmental Effect</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.policy}
          onPress={() => this.props.navigation.navigate("Policy")}
        >
          <Text style={styles.policyStyle}>Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.about}
          onPress={() => this.props.navigation.navigate("About")}
        >
          <Text style={styles.aboutStyle}>About</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    // backgroundColor: "#112031",
    backgroundColor: "#082032",
    // backgroundColor: "#00A19D",
  },
  logo: {
    width: 390,
    height: 100,
    right: 55,
    top: 30,
  },
  update: {
    top: 75,
  },
  map: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    marginTop: 200,
    backgroundColor: "#fc5c65",
    // backgroundColor: "#F8F0DF",

    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  mapStyle: {
    fontWeight: "bold",
  },
  progressInMedicine: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#4ecdc4",
    // backgroundColor: "#F8F0DF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  progressInMedicineStyle: {
    fontWeight: "bold",
  },
  economicalEffect: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    // backgroundColor: "#ffcc5c",
    backgroundColor: "#FEC260",
    // backgroundColor: "#F8F0DF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  economicalEffectStyle: {
    fontWeight: "bold",
  },
  policy: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "#96ceb4",
    // backgroundColor: "#F8F0DF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  policyStyle: {
    fontWeight: "bold",
  },
  about: {
    width: "100%",
    height: 40,
    marginBottom: 10,
    // backgroundColor: "#4ecdc4",
    backgroundColor: "#FDD2BF",
    // backgroundColor: "#F8F0DF",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  aboutStyle: {
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
