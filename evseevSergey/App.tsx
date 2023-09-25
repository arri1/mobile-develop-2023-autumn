import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Lab1 from './screens/Lab1.js';
import Lab2 from './screens/Lab2.js';

const Tab = createBottomTabNavigator();

  export default function App(){
  return (
   <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
      </Tab.Navigator>
   </NavigationContainer>
  );
};