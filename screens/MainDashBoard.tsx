import React, { useState, FC } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import moment from "moment";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

interface props {
  navigation: any;
}
const DashBoard: FC<props> = (props) => {
  const [user, setUser] = useState([
    { user: "David Waza", location: "Abuja, F.C.T", key: "1" },
  ]);

  const repairsNavigation = () => {
    props.navigation.navigate("carRepairs");
  };
  return (
    <ScrollView>
      <View style={styles.mapOutline}>
        <TouchableOpacity
          style={styles.iconMap}
          onPress={() => props.navigation.navigate("Map")}
        >
          <Entypo name="location" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.mapOutline, ...styles.questionOutline }}>
        <TouchableOpacity style={styles.iconQuestion}>
          <FontAwesome name="question" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* hero banner area */}
      <View style={styles.nameProps}>
        <Text style={styles.namePropsText}>Hello, Waza!</Text>
        <Text style={styles.namePropsSubText}>
          What can we do for you today?
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.columnBox}>
          <Text style={styles.text}>CAR SERVICES &</Text>
          <Text style={{ ...styles.text, ...styles.washText }}>WASH</Text>
          <Image
            source={require("../assets/servicecar.png")}
            style={globalStyles.image}
          />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get services</Text>
          </Pressable>
        </View>

        {/* select services area */}
        <Text style={styles.serText}>Select services</Text>
        <View style={styles.rowBox}>
          <TouchableOpacity onPress={repairsNavigation}>
            <View style={styles.boxOne}>
              <Image
                source={require("../assets/repairs.png")}
                style={styles.image}
              />
              <Text style={styles.title}>Car Repairs</Text>
              <Pressable style={styles.button}>
                <Text style={styles.buttonTitle}>Book Session</Text>
              </Pressable>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={repairsNavigation}>
            <View style={{ ...styles.boxOne, ...styles.boxTwo }}>
              <Image
                source={require("../assets/car.png")}
                style={styles.image}
              />
              <Text style={{ ...styles.title, ...styles.titleTwo }}>
                Car Wash
              </Text>
              <Pressable style={styles.button}>
                <Text
                  style={{ ...styles.buttonTitle, ...styles.buttonTitleTwo }}
                >
                  Book Session
                </Text>
              </Pressable>
            </View>
          </TouchableOpacity>
        </View>

        {/* ongoing services section */}
        <Text style={{ ...styles.serText, ...styles.ser }}>
          Ongoing services
        </Text>
        <TouchableOpacity>
          <View style={styles.ongGoingService}>
            <Image
              source={require("../assets/car.png")}
              style={styles.onGoingimage}
            />
            {/* arrays */}
            <FlatList
              data={user}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.timezone}>
                    <Entypo name="user" size={24} color="black" />
                    <Text style={{ ...styles.title, ...styles.time }}>
                      {item.user}
                    </Text>
                  </View>
                  <View style={styles.timezone}>
                    <Entypo name="location-pin" size={24} color="black" />
                    <Text style={{ ...styles.title, ...styles.time }}>
                      {item.location}
                    </Text>
                  </View>
                </View>
              )}
            />
            <View style={styles.timezone}>
              <Entypo name="time-slot" size={24} color="black" />
              <Text style={{ ...styles.title, ...styles.time }}>
                {moment().format()}
              </Text>
            </View>
            {/*  */}
            <Pressable style={{ ...styles.button, ...styles.OngoingButton }}>
              <Text style={styles.onGoingText}>Ongoing</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
        {/* <Map /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    marginVertical: 10,
  },
  nameProps: {
    backgroundColor: "#fefefe",
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    height: 100,
    width: "100%",
    elevation: 3,
  },
  namePropsText: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1110",
  },
  namePropsSubText: {
    fontSize: 15,
    marginTop: -20,
    marginHorizontal: 20,
    color: "#282C35",
  },
  columnBox: {
    color: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#2c0b1c",
    marginHorizontal: 10,
    height: 300,
    elevation: 3,
  },
  rowBox: {
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginTop: 20,
    height: 50,
    textAlign: "center",
    width: "100%",
  },
  button: {
    position: "absolute",
    bottom: 40,
    left: 20,
    width: 140,
    borderRadius: 10,
    backgroundColor: "#d1a134",
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    padding: 12,
    fontWeight: "bold",
  },
  boxOne: {
    borderRadius: 20,
    backgroundColor: "#d1a134",
    width: 200,
    height: 200,
    alignItems: "center",
    alignContent: "center",
    elevation: 3,
  },
  boxTwo: {
    backgroundColor: "#2c0b1c",
    elevation: 3,
  },
  text: {
    position: "absolute",
    top: 10,
    left: 20,
    letterSpacing: 2,
    fontSize: 35,
    textAlign: "center",
    fontWeight: "100",
    color: "white",
  },
  washText: {
    position: "absolute",
    top: 60,
  },
  serText: {
    color: "black",
    padding: 10,
    fontSize: 18,
    marginVertical: 10,
    marginBottom: -15,
  },
  ser: {
    marginTop: 170,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 25,
    color: "#2c0b1c",
    fontWeight: "800",
  },
  titleTwo: {
    color: "white",
  },
  buttonTitle: {
    position: "absolute",
    backgroundColor: "#2c0b1c",
    padding: 10,
    bottom: -30,
    left: 10,
    textAlign: "center",
    color: "white",
    width: "100%",
    fontSize: 12,
    borderRadius: 10,
  },
  buttonTitleTwo: {
    backgroundColor: "#d1a134",
  },
  ongGoingService: {
    backgroundColor: "#f3f3f3",
    marginHorizontal: 10,
    marginVertical: 10,
    height: 160,
    elevation: 3,
    paddingBottom: 10,
  },
  onGoingimage: {
    height: 50,
    width: 50,
    marginTop: 10,
    marginHorizontal: 10,
  },
  OngoingButton: {
    position: "absolute",
    left: 300,
    bottom: 60,
    width: 70,
    backgroundColor: "#2c0b1c",
  },
  onGoingText: {
    color: "white",
    padding: 3,
    textAlign: "center",
  },
  timezone: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 3,
  },
  time: {
    color: "black",
    fontSize: 15,
    marginHorizontal: 10,
  },
  mapOutline: {
    backgroundColor: "#fefefe",
    height: 45,
    width: 45,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 100,
    borderColor: "black",
    elevation: 3,
  },
  iconMap: {
    marginHorizontal: 10,
    marginVertical: 10,
    marginRight: -9,
  },
  questionOutline: {
    position: "absolute",
    right: 0,
  },
  iconQuestion: {
    marginHorizontal: 15,
    marginVertical: 10,
    marginRight: -9,
  },
});
export default DashBoard;
