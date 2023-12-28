import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import lab2 from "./lab2";

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
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="lab2" component={lab2} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
