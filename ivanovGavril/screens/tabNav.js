import Lab1 from "./lab1";
import Lab2 from "./lab2";
import { createStackNavigator } from "@react-navigation/stack";
import Lab3, { Lab3Part1, Lab3Part2 } from "./lab3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignOut from "./signOut";
import Lab5 from "./lab5";
import ChangePassword from "./change";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export function Lab3Stack() {
  return (
    <Stack.Navigator
      initialRouteName={"lab3Home"}
      screenOptions={{
        headerMode: "screen",
      }}
    >
      <Stack.Screen
        name="lab3Home"
        component={Lab3}
        options={{ title: "Лабораторная работа №3" }}
      />
      <Stack.Screen
        name="lab3.1"
        component={Lab3Part1}
        options={{ title: "c useMemo" }}
      />
      <Stack.Screen
        name="lab3.2"
        component={Lab3Part2}
        options={{ title: "без useMemo" }}
      />
    </Stack.Navigator>
  );
}
export default function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={"lab1"} component={Lab1} />
      <Tab.Screen name={"lab2"} component={Lab2} />
      <Tab.Screen name={"lab3"} component={Lab3Stack} />
      <Tab.Screen name={"lab5"} component={Lab5} />
      <Tab.Screen name={"logout"} component={SignOut} />
      <Tab.Screen name={"change"} component={ChangePassword} />
    </Tab.Navigator>
  );
}
