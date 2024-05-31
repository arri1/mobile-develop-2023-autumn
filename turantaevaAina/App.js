import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, AppRegistry } from "react-native";
import lab1 from "./components/lab1";
import lab2 from "./components/lab2";
import lab3 from "./components/lab3";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { Provider } from "react-redux";
import store from "./redux/store";

AppRegistry.registerComponent("MyApp", () => require("./App"));

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
        <Tab.Screen
          name="lab3"
          component={lab3}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/to-do-list.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/to-do-list.png")}
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