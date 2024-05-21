/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // eslint-disable-next-line no-empty-pattern
        screenOptions={({}) => ({
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: '#888888',
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarLabel: 'Лаб 1',
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarLabel: 'Лаб 2',
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            tabBarLabel: 'Лаб 3',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
