import React,{FC} from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import { globalStyles } from "./styles/globalStyles";

interface props{
  navigation:any
}
const SplashScreen:FC<props> = (props) => {
  const handlePress = () => {
    props.navigation.navigate("Login");
  };
  return (
    <ImageBackground
      source={require("./assets/bgq.jpg")}
      style={globalStyles.header}
    >
      <View style={globalStyles.textSpace}>
        <Text style={globalStyles.headerText}>AUTO CAR REPAIRS</Text>
        <Text style={globalStyles.headerSubText}>
          Fix your car ANYWHERE, ANYTIME
        </Text>
        <Pressable style={globalStyles.button} onPress={handlePress}>
          <Text style={globalStyles.text}>Get started</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
export default SplashScreen;
