import React, { useState, FC } from "react";
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
import Input from "../component/Input";
import Button from '../component/button'

const Signup: FC = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");


  const signUpNavigation = () => {
     props. navigation.goBack();
  }
  const handlePress = () => {
    if (name.length > 3 && password.length > 3) {
      return props.navigation.navigate("Login");
  } else {
    Alert.alert("OOPS!", "Please input all details", [
      { text: "understood", onPress: () => console.log("pressed alert") },
    ]);
  }
  };

  return (
    <ImageBackground
      source={require("../assets/audi.jpg")}
      style={{ ...globalStyles.container, ...styles.image }}
      resizeMode="cover"
    >
      <View>
        <Input
          style={globalStyles.input}
          placeholder="Username"
          placeholderTextColor="#000"
          secureTextEntry={false}
          onChangeText={(text) => setName(text)}
        />
        <Input
          style={globalStyles.input}
          placeholder="Email"
          placeholderTextColor="#000"
          secureTextEntry={false}
          onChangeText={(text) => setName(text)}
        />
        <Input
          style={globalStyles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText={(val) => setPassword(val)}
        />
        <Input
          style={globalStyles.input}
          secureTextEntry={true}
          placeholder=" Confirm Password"
          placeholderTextColor="#000"
          onChangeText={(val) => setPassword(val)}
        />
      </View>

      <Button title="SignUp" onPress={signUpNavigation}/>

      <View style={styles.loginText}>
        <Text style={{ color:"white"}}>Already have an Account?</Text>
        <TouchableOpacity onPress={signUpNavigation} style={{marginHorizontal:5}}>
          <Text style={{color:"white"}}>Login Here</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity onPress={signUpNavigation}>
        <Text style={styles.text}>Already have an account? Sign in</Text>
      </TouchableOpacity> */}
    </ImageBackground>
  );
};
export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  loginText:{
    flexDirection:"row",
    marginVertical:20,
  }
});
