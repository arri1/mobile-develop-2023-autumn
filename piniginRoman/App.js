import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import lab1 from './components/lab1';
import lab2 from './components/lab2';
import lab3 from './components/lab3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Counter" component={lab1} />
        <Tab.Screen name="ToDoList" component={lab2} /> 
        <Tab.Screen name="EvenOdd" component={lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
