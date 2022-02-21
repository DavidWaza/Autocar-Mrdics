import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SplashScreen from "../SplashScreen";
import Login from "../Login";

const Stack = createNativeStackNavigator();
const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export default Navigator;
