// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import lab1 from './screens/lab1';
import lab2 from './screens/lab2';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="lab1" component={lab1} option={{title:'лаба 1'}} />
        <Stack.Screen name="lab2" component={lab2} option={{title:'лаба 2'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
