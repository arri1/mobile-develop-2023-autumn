import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarLabel: "Lab1",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="cloud" 
              color={"blue"} 
              size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarLabel: "Lab2",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons 
              name="cloud" 
              color={"blue"} 
              size={20} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
