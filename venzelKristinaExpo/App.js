import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/calculator.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/audience.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});
