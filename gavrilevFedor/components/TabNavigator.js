import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab5 from "../screens/Lab5";
import SignOut from "./SignOut";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: "#1244C5",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 24,
          fontFamily: "sans-serif-light",
          fontWeight: "900",
          color: "#F0F0F0",
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          height: 60,
          backgroundColor: "#1244C5",
        },
        tabBarLabelStyle: {
          color: "#F0F0F0",
          fontSize: 16,
          fontWeight: "900",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Лабораторная работа 1") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Лабораторная работа 2") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "Лабораторная работа 3") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "Лабораторная работа 5") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "Смена пароля") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "Выйти") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={"#F0F0F0"} />;
        },
      })}
    >
      <Tab.Screen
        name="Лабораторная работа 1"
        component={Lab1}
        options={{
          tabBarBadge: counter > 0 ? counter : null,
          tabBarLabel: "1",
        }}
      />
      <Tab.Screen
        name="Лабораторная работа 2"
        component={Lab2}
        options={{ tabBarLabel: "2" }}
      />
      <Tab.Screen
        name="Лабораторная работа 3"
        component={Lab3}
        options={{ tabBarLabel: "3" }}
      />
      <Tab.Screen
        name="Лабораторная работа 5"
        component={Lab5}
        options={{ tabBarLabel: "5" }}
      />
      <Tab.Screen
        name="Смена пароля"
        component={ChangePasswordScreen}
        options={{ tabBarLabel: "Пароль" }}
      />
      <Tab.Screen
        name="Выйти"
        component={SignOut}
        options={{ tabBarLabel: "Выйти" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
