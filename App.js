import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Navigator from "./route/Navigator";
import SplashScreen from "./SplashScreen";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import DashBoard from "./screens/MainDashBoard";
import React from "react";
import Map from "./Map";
import CarRepairs from "./screens/carRepairs.tsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="Auto Medics"
          component={SplashScreen}
          options={{
            title:"",
            headerStyle: {
              backgroundColor: "#16161d",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#da9100",
            },
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: "SignUp",
            headerStyle: {
              backgroundColor: "#848482",
              textAlign: "center",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{
            headerStyle: {
              backgroundColor: "#2c0b1c",
            },
          }}
        />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
