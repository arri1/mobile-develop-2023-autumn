import {NavigationContainer} from "@react-navigation/native";
import CreateBottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3, {Lab3Part1, Lab3Part2} from "./screens/lab3";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Lab3Stack() {
    return (
        <Stack.Navigator
            initialRouteName={"lab3Home"}
            screenOptions={{
                headerMode: "screen"
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

export default function App() {

    const Tab = CreateBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={"lab1"} component={Lab1}></Tab.Screen>
                <Tab.Screen name={"lab2"} component={Lab2}></Tab.Screen>
                <Tab.Screen name={"lab3"} component={Lab3Stack}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
