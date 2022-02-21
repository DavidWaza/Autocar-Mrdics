import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Login = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUpNavigation = () => {
    navigation.navigate("Signup");
  };
  const submitHandler = () => {
    if (name.length > 3 && password.length > 3) {
        return navigation.navigate("Dashboard");
    } else {
      Alert.alert("OOPS!", "Please input your Correct details", [
        { text: "understood", onPress: () => console.log("pressed alert") },
      ]);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/porsche.jpg")}
      style={globalStyles.container}
    >
      <View>
        <TextInput
        required
          style={globalStyles.input}
          placeholder="Username"
          placeholderTextColor="#000"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
        required
          style={globalStyles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <Pressable style={styles.button} onPress={submitHandler}>
        <Text style={globalStyles.text}>Login</Text>
      </Pressable>
      <TouchableOpacity onPress={signUpNavigation}>
        <Text style={styles.text}>Don't have account ? Sign up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
  },

  button: {
    marginTop: 20,
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    marginTop: 13,
    fontSize: 13,
    color: "white",
  },
});
export default Login;
