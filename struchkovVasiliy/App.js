import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import AuthScreen from './screens/AuthScreen';
import RegisterScreen from './screens/RegisterScreen';
import { auth } from './firebase';

const Tab = createBottomTabNavigator();
const AuthStack = createStackNavigator();

function AuthFlow() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Auth"
        component={AuthScreen}
        options={{ title: 'Вход' }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Регистрация' }}
      />
    </AuthStack.Navigator>
  );
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator
          // eslint-disable-next-line no-empty-pattern
          screenOptions={({}) => ({
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: '#888888',
            tabBarLabelStyle: {
              fontSize: 15,
              fontWeight: 'bold',
            },
          })}
        >
          <Tab.Screen
            name="Lab1"
            component={Lab1}
            options={{ tabBarLabel: 'Лаб 1' }}
          />
          <Tab.Screen
            name="Lab2"
            component={Lab2}
            options={{ tabBarLabel: 'Лаб 2' }}
          />
          <Tab.Screen
            name="Lab3"
            component={Lab3}
            options={{ tabBarLabel: 'Лаб 3' }}
          />
        </Tab.Navigator>
      ) : (
        <AuthFlow />
      )}
    </NavigationContainer>
  );
}
