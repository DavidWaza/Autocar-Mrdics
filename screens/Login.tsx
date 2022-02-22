import React, { useState, FC } from "react";
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import Input from "../component/Input";
import { Button } from "../component";

const Login: FC = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUpNavigation = () => {
    props.navigation.navigate("Signup");
  };
  const submitHandler = () => {
    if (name.length > 3 && password.length > 3) {
        return props.navigation.navigate("Dashboard");
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
        <Input
          style={globalStyles.input}
          placeholder="Username"
          secureTextEntry={false}
          placeholderTextColor="#000"
          onChangeText={(val) => setName(val)}
        />
        <Input
          style={globalStyles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <Button title="Login" onPress={submitHandler} />
      <View style={styles.loginText}>
        <Text style={{ color:"white"}}>Don't have an Account?</Text>
        <TouchableOpacity onPress={signUpNavigation} style={{marginHorizontal:5}}>
          <Text style={{color:"white"}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={signUpNavigation}>
        <Text>Sign up</Text>
      </TouchableOpacity> */}
    </ImageBackground>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginText:{
    flexDirection:"row",
    marginVertical:20,
  }
})
