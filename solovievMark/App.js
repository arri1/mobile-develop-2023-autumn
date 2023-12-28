import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("./images/more.png")}
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
                  source={require("./images/cloudy.png")}
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
                  source={require("./images/writing.png")}
                  style={styles.img}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 20,
    width: 20,
  },
});
