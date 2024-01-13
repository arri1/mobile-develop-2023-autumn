import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AppRegistry
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Lab3 from "./screens/Lab3";
import Ionicons from "@expo/vector-icons/Ionicons";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";

AppRegistry.registerComponent("MyApp", () => require("./App"));

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor, iconName;

            if (route.name === "Lab1") {
              iconName = "book";
              iconColor = "black";
            } else if (route.name === "Lab2") {
              iconName = "book-outline";
              iconColor = "black";
            }else if (route.name === "Lab3") {
              iconName = "build-outline";
              iconColor = "gray";
            }else if (route.name === "SignUp") {
              iconName = "body";
              iconColor = "gray";
            }else if (route.name === "SignIn") {
              iconName = "body-outline";
              iconColor = "gray";
            }
            return <Ionicons name={iconName} size={32} color={iconColor} />;
          },
          tabBarActiveTintColor: "rgb(	173, 216, 230)",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="SignIn" component={SignIn} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
