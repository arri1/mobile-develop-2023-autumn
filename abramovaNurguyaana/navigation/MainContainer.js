import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './screens/HomePage';
import CounterPage from './screens/CounterPage';
import ToDoPage from './screens/ToDoPage';
import UMCounterPage from './screens/UMCounterPage';
import ProfilePage from './screens/ProfilePage';

const HomePageName = 'Home';
const CounterPageName = 'Counter';
const ToDoPageName = 'ToDo';
const UMCounterPageName = 'UseMemo';
const ProfilePageName = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={HomePageName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === HomePageName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === CounterPageName) {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (rn === ToDoPageName) {
            iconName = focused ? 'checkbox' : 'checkbox-outline';
          } else if (rn === UMCounterPageName) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (rn === ProfilePageName) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen name={HomePageName} component={HomePage} />
      <Tab.Screen name={CounterPageName} component={CounterPage} />
      <Tab.Screen name={ToDoPageName} component={ToDoPage} />
      <Tab.Screen name={UMCounterPageName} component={UMCounterPage} />
      <Tab.Screen name={ProfilePageName} component={ProfilePage} />
    </Tab.Navigator>
  );
}

export default MainContainer;
