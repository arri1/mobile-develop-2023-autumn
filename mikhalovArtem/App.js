import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import Lab4 from './screens/lab4';
import Lab5 from './screens/lab5';

// Создание нижнего навигатора
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="auth" component={Lab4} />
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
        <Tab.Screen name="Lab5" component={Lab5} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;