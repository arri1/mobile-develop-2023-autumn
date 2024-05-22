/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import SignOutScreen from './screens/SignOutScreen';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: 'Вход' }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Регистрация' }}
      />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#B5AE08' },
        tabBarItemStyle: { padding: 0 },
        tabBarLabelStyle: { fontSize: 15, color: 'white' },
      }}
    >
      <Tab.Screen
        name="Lab1"
        component={Lab1}
        options={{
          tabBarLabel: 'Лаб 1',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="science" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab2"
        component={Lab2}
        options={{
          tabBarLabel: 'Лаб 2',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="edit" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Lab3"
        component={Lab3}
        options={{
          tabBarLabel: 'Лаб 3',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="school" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SignOut"
        component={SignOutScreen}
        options={{
          tabBarLabel: 'Выход',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="logout" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
