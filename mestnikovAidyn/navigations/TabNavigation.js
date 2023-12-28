import Lab1 from "../Screens/Lab1";
import Lab2 from "../Screens/Lab2";
import Lab3 from "../Screens/Lab3";
import Lab5 from "../Screens/Lab5";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../Screens/Settings";
import se from "./settingsnavi";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import SettingsNavigation from "./settingsnavi";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#087dff",
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
          tabBarLabel: "Lab1",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarLabel: "Lab2",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarLabel: "Lab3",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Lab5"
        component={Lab5}
        options={{
          tabBarLabel: "Lab5",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />



      <Tab.Screen
        name="Settings"
        component={SettingsNavigation}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});
export default TabNavigation;
