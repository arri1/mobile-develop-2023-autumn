import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Laba1 from "../../assets/svg/icon-laba1";
import Laba2 from "../../assets/svg/icon-laba2";
import Laba3 from "../../assets/svg/icon-laba3";
import Redux from "../../assets/svg/icon-redux";
import Laba4 from "../../assets/svg/icon-logout";

import Task1 from "../screens/task1";
import Task2 from "../screens/task2";
import Task3 from "../screens/task3";
import Taskredux from "../screens/redux";
import Auth from "../screens/auth";
import Logout from "../screens/logout";
import ChangeEmail from "../screens/changeemail";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, size, color }) => {
        return route.name === "lab1" ? <Laba1 /> :
          route.name === "lab2" ? <Laba2 /> :
          route.name === "lab3" ? <Laba3 /> :
          route.name === "redux" ? <Redux /> :
          route.name === "logout" ? <Laba4 /> :
          route.name === "settings" ? <Laba4 /> :
          null;
      },
    })}
  >
    <Tab.Screen name="lab1" component={Task1} />
    <Tab.Screen name="lab2" component={Task2} />
    <Tab.Screen name="lab3" component={Task3} />
    <Tab.Screen name="redux" component={Taskredux} />
    <Tab.Screen name="logout" component={Logout} />
    <Tab.Screen name="settings" component={ChangeEmail} />
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
    </Stack.Navigator>
  );
};

export default Navigation;
