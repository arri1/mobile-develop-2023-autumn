import React from 'react';
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab4 from "../screens/Lab4";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="First lab" component={Lab1} />
        <Tab.Screen name="Second lab" component={Lab2} />
        <Tab.Screen name="Third lab" component={Lab3} />
       <Tab.Screen name="Lab4" component={Lab4}/>
    </Tab.Navigator>
  );
};
export default TabNavigation;
