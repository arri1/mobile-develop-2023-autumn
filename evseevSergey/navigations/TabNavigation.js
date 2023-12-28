import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab3Entries from "../screens/Lab3Entries";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
        <Tab.Screen name="Lab3Entries" component={Lab3Entries} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
