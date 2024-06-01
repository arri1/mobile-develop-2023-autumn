import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, AppRegistry } from "react-native";
import lab1 from "./components/lab1";
import lab2 from "./components/lab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="lab1"
          component={lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/keys.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="lab2"
          component={lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/tdl.png")}
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