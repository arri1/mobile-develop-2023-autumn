import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './screens/HomePage.js';
import CounterPage from './screens/CounterPage';
import ToDoPage from './screens/ToDoPage';

const HomeName = "Home";
const CounterPageName = "Counter";
const ToDoPageName = "ToDo";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === HomeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === CounterPageName) {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (rn === ToDoPageName) {
              iconName = focused ? 'checkbox' : 'checkbox-outline';
            } 

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
           activeTintColor: 'black',
           inactiveTintColor: 'grey'
        }}
        >

        <Tab.Screen name={HomeName} component={HomePage} />
        <Tab.Screen name={CounterPageName} component={CounterPage} />
        <Tab.Screen name={ToDoPageName} component={ToDoPage} />      

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;