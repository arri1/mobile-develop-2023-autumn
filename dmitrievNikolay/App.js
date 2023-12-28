import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNav from './Navigations/AuthNav';
import LabsNav from './Navigations/LabsNav';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthNav} />
        <Stack.Screen name="Labs" component={LabsNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
