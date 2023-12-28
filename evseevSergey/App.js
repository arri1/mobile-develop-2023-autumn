import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabNavigation from "./navigations/TabNavigation";
import DrawerNavigation from "./navigations/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View>
        <StatusBar backgroundColor="rgb(217,217,217)" />
      </View>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
