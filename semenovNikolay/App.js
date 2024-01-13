import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import Ionicons from "@expo/vector-icons/Ionicons";

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
              iconColor = "gray";
            } else if (route.name === "Lab2") {
              iconName = "book-outline";
              iconColor = "black";
            }
            return <Ionicons name={iconName} size={32} color={iconColor} />;
          },
          tabBarActiveTintColor: "rgb(	173, 216, 230)",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
