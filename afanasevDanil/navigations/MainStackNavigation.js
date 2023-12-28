import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Registration from "../screens/Registration";
const Stack = createStackNavigator();

const MainStackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen
      name="Login"
      component={Login}
      style={{ Color: "rgb(255,192,203)" }}
    />
    <Stack.Screen name="Tab" component={TabNavigation} />
  </Stack.Navigator>
);

export default MainStackNavigation;
