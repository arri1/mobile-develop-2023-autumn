import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import SettingsNavigation from "./SettingsNavigation";
import Redux from "../screens/Redux";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../images/more.png")}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../images/cloudy.png")}
                style={{ height: 30, width: 30 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../images/writing.png")}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Redux"
        component={Redux}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../images/redux.png")}
                style={styles.img}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsNavigation}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require("../images/settings.png")}
                style={styles.img}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
});
export default TabNavigation;
