import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  Alert,
  Pressable,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { globalStyles } from "../styles/globalStyles";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const signUpNavigation = () => {
      navigation.goBack();
  }
  const handlePress = () => {
    if (name.length > 3 && password.length > 3) {
      return navigation.navigate("Login");
  } else {
    Alert.alert("OOPS!", "Please input all details", [
      { text: "understood", onPress: () => console.log("pressed alert") },
    ]);
  }
  };

  return (
    <ImageBackground
    source={require("../assets/audi.jpg")}
    style={{...globalStyles.container, ...styles.image}}
    resizeMode="cover"
  >
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder="Username"
          placeholderTextColor="#000"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#000"
          onChangeText={(val) => setName(val)}
        />
        <TextInput
          style={globalStyles.input}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText={(val) => setPassword(val)}
        />
         <TextInput
          style={globalStyles.input}
          secureTextEntry={true}
          placeholder=" Confirm Password"
          placeholderTextColor="#000"
          onChangeText={(val) => setPassword(val)}
        />
      </View>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={globalStyles.text}>Submit</Text>
      </Pressable>
      <TouchableOpacity onPress={signUpNavigation}>
      <Text style={styles.text}>Already have an account? Sign in</Text>
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
  image:{
      flex:1,
      justifyContent:"center"
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
    marginTop:13,
    fontSize:13,
    color:"white"
}
});
export default Signup;
