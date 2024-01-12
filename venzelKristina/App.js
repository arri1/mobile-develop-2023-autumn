import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, Image} from 'react-native';
import Lab1 from './screens/Lab1';
import Lab2 from './screens/Lab2';
import Lab3 from './screens/Lab3';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTintColor: 'rgb(255, 255, 255)',
          headerStyle: {
            height: 70,
            backgroundColor: 'rgb(25, 28, 41)',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: 'Inter',
          },
          tabBarStyle: {
            height: 70,
            backgroundColor: 'rgb(194, 194, 194)',
          },
        })}>
        <Tab.Screen
          name="Calculator"
          component={Lab1}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./icons/calculator.png')}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Joke"
          component={Lab2}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./icons/audience.png')}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Expensive Count"
          component={Lab3}
          options={{
            tabBarIcon: ({focused}) => (
              <View>
                <Image
                  source={require('./icons/clipboard.png')}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 42,
    width: 42,
  },
});
