import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './screens/HomePage';
import CounterPage from './screens/CounterPage';

const HomePageName = 'Home';
const CounterPageName = 'Counter';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
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
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
