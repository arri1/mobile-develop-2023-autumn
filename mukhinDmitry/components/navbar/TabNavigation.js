import { StyleSheet, Image, Text } from 'react-native'
import KzrLab1 from '../labs/lab1/Lab1'
import KzrLab2 from '../labs/lab2/Lab2'
import KzrLab3 from '../labs/lab3/Lab3'
import KzrLab4 from '../labs/lab4/Lab4'
import KzrSettings from '../labs/lab5/Settings'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#5E5E5E',
        },
        headerTitleAlign: 'center',
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? '#FFFFFF' : '#A5A5A5',
                top: -8,
              }}
            >
              {route.name}
            </Text>
          )
        },
        tabBarStyle: {
          elevation: 0,
          backgroundColor: '#5E5E5E',
          borderTopColor: '#5E5E5E',
          borderTopWidth: 1,
          height: 69.81,
        },
      })}
    >
      <Tab.Screen
        name="Lab 1"
        component={KzrLab1}
        options={{
          title: 'Color randomizer (React Redux)',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/navbar/tab-1.png')}
                style={styles.icon}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Lab 2"
        component={KzrLab2}
        options={{
          title: 'Simple To-Do list',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/navbar/tab-2.png')}
                style={styles.icon}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Lab 3"
        component={KzrLab3}
        options={{
          title: 'UseMemo and UseCallback',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/navbar/tab-1.png')}
                style={styles.icon}
              />
            )
          },
        }}
      />
      <Tab.Screen
        name="Lab 4"
        component={KzrLab4}
        options={{
          title: 'React Redux Listener',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
          tabBarIcon: () => {
            return (
              <Image
                source={require('../../assets/navbar/tab-2.png')}
                style={styles.icon}
              />
            )
          },
        }}
      />      
      <Tab.Screen
      name="Settings"
      component={KzrSettings}
      options={{
        title: 'Settings',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFFFFF',
        },
        tabBarIcon: () => {
          return (
            <Image
              source={require('../../assets/navbar/tab-2.png')}
              style={styles.icon}
            />
          )
        },
      }}
    />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'stretch',
  },
})

export default TabNavigator
