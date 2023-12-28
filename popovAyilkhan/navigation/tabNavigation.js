import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Image } from "react-native"
import Lab1 from "../screens/lab1";
import Lab2 from "../screens/lab2";
import Lab3 from "../screens/lab3";
import Lab4 from "../screens/lab4";
import Lab5 from "../screens/lab5";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1F2840',
          borderColor: '#1F2840',
        },
        tabBarActiveTintColor: '#327CFF',
        tabBarInactiveTintColor: '#CCCCCC',
        headerShown: false,
      }}>
      <Tab.Screen 
        name="lab1" 
        component={Lab1}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ focused, size }) =>(
            <Image
              source={require('../assets/brush.png')}
              style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF' }}
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="lab2" 
        component={Lab2}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ focused, size }) =>(
            <Image
              source={require('../assets/bitcoin-btc.png')}
              style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF'}}
            />
          )
        }} 
      />
      <Tab.Screen 
        name="lab3" 
        component={Lab3}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ focused, size }) =>(
            <Image
              source={require('../assets/book.png')}
              style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF' }}
            />
          )
        }} 
      />
      <Tab.Screen 
        name="lab4" 
        component={Lab4}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ focused, size }) =>(
            <Image
              source={require('../assets/userNav.png')}
              style={{ width: size, height: size, tintColor: focused ? '#327CFF' : '#FFFFFF' }}
            />
          )
        }} 
      />
      <Tab.Screen 
        name="lab5" 
        component={Lab5}
        options={{
          tabBarLabel:() => null,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="theme-light-dark" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;