import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Navigator from "./route/Navigator";
import SplashScreen from "./SplashScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import DashBoard from "./screens/MainDashBoard";
import React from "react";
import CarRepairs from "./screens/carRepairs.tsx";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
  
    <NavigationContainer screenOptions={{headerShow:false}}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="Auto Medics" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={DashBoard} />
        <Stack.Screen name="carRepairs" component={CarRepairs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
