import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import ReduxLab from "../screens/ReduxLab";
import Lab4 from "../screens/lab4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";
import SettingsNavigation from "./SetNav";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconColor, iconName;

          return <Ionicons name="clipboard-outline" size={32} color="gray" />;
        },
        tabBarActiveTintColor: "rgb(	173, 216, 230)",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />

      <Tab.Screen name="Lab4" component={Lab4} />
      <Tab.Screen name="ReduxLab" component={ReduxLab} />
      <Tab.Screen name="SetNav" component={SettingsNavigation} />
    </Tab.Navigator>
  );
};

export default TabNavigation;