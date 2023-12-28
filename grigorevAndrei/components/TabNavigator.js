import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import lab1 from "./lab1";
import lab2 from "./lab2";
import lab3 from "./lab3";
import lab5 from "./lab5";
import SignOut from "./SignOut";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const counter = useSelector((state) => state.counter.value);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Lab1") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "lab2") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name == "lab3") {
            iconName = focused ? "bug" : "bug-outline";
          } else if (route.name === "lab5") {
            iconName = focused ? "ios-pluscircleo" : "ios-pluscircle";
          } else if (route.name === "lab4") {
            iconName = focused ? "ios-pluscircleo" : "ios-pluscircle";
          } else if (route.name == "Выйти") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Lab1"
        component={lab1}
        options={{ tabBarBadge: counter > 0 ? counter : null }}
      />
      <Tab.Screen name="lab2" component={lab2} />
      <Tab.Screen name="lab3" component={lab3} />
      <Tab.Screen name="lab5" component={lab5} />
      <Tab.Screen
        name="Выйти"
        component={SignOut}
        options={{ tabBarLabel: "Выйти" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
