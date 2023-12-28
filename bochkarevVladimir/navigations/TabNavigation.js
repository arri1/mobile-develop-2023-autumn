import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image } from "react-native";
import Logout from "../screens/Logout";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTintColor: "black",
        headerStyle: {
          backgroundColor: "rgba(170, 180, 140, 1)",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 32,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          height: 80,
          backgroundColor: "rgba(215, 215, 215, 1)",
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
        name="Logout"
        component={Logout}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="logout" size={size} color={color} />
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
