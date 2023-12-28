import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
  AppRegistry,
} from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import lab2 from "./labs/lab2";
import lab3 from "./labs/lab3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

import { Provider } from "react-redux";
import store from "./redux/store";

AppRegistry.registerComponent("MyApp", () => require("./App"));

function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={styles.fullScreen}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.symbolText}>Hello World!</Text>
        <Text style={styles.symbolTextSmall}>Lytkin Fedor FIIT-20</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.counterFont}>{count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 1)}
        >
          <Text>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 10)}
        >
          <Text>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 10)}
        >
          <Text>-10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 1)}
        >
          <Text>-1 </Text>
        </TouchableOpacity>
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "News") {
                iconName = focused ? "ios-list" : "ios-list-outline";
              } else if (route.name === "UseMemo") {
                iconName = focused ? "calculator" : "calculator-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="News"
            component={lab2}
            options={{ tabBarBadge: 3 }}
          />
          <Tab.Screen name="UseMemo" component={lab3} />
          <Tab.Screen name="SignUp" component={SignUp} />
          <Tab.Screen name="SignIn" component={SignIn} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 20,
  },
  container: {
    padding: 60,
  },
  roundButtonNumber: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#D2CCC7",
  },
  titleTextContainer: {
    padding: 60,
  },
  symbolText: {
    fontSize: 60,
  },
  symbolTextSmall: {
    fontSize: 15,
  },
  counterFont: {
    fontSize: 200,
  },
});
