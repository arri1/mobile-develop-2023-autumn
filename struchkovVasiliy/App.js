import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarActiveTintColor: "black",
      tabBarInactiveTintColor: "#888888",
      tabBarLabelStyle: {
        fontSize: 16,
        fontWeight: "bold",
      },
    })}
>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarLabel: "Лаб 1",
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarLabel: "Лаб 2",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}