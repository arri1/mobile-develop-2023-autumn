import React from "react";
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab4 from "../screens/Lab4";
import Lab5 from "../screens/Lab5";
import Settings from "../screens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerTintColor: "rgba(42, 61, 69, 1)",
      headerStyle: {
        backgroundColor: "rgb(255, 0, 0)",
      },
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 32,
        fontFamily: "sans-serif-light",
      },
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarStyle: {
        height: 60,
        backgroundColor: "rgba(217, 217, 217, 1)",
      },
    })}
  >
    <Tab.Screen
      name="Lab1"
      component={Lab1}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./iconic.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Lab2"
      component={Lab2}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./iconic.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Lab3"
      component={Lab3}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./iconic.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Lab4"
      component={Lab4}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./iconic.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Lab5"
      component={Lab5}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./iconic.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require("./cogy.png")}
            style={{
              tintColor: color,
              width: size,
              height: size,
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
