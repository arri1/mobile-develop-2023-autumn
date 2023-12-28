import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab4 from "../screens/Lab4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "../screens/Settings";
import se from "./settingsnavi";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import SettingsNavigation from "./settingsnavi";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTintColor: "rgba(42, 61, 69, 1)",
        headerStyle: {
          backgroundColor: "rgba(188, 172, 155, 1)",
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
        name="Calculator"
        component={Lab1}
        options={{
          tabBarLabel: "Lab1",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DOG FACT"
        component={Lab2}
        options={{
          tabBarLabel: "Lab2",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Expensive Count"
        component={Lab3}
        options={{
          tabBarLabel: "Lab3",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Redux"
        component={Lab4}
        options={{
          tabBarLabel: "Lab4",
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
