import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./Screens/Lab1";
import Lab2 from "./Screens/Lab2";


const Tab = createBottomTabNavigator();
export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Lab1" component={Lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/ico1.png")}
                  style={styles.img}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen name="Lab2" component={Lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  source={require("./icons/ico2.png")}
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
  container: {
    justifyContent: "end",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#696969',
    gap: 10,
  },
  text: {
    color: "cyan", 
    fontSize: 24,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
  img: {
    height: 30,
    width: 30,
  }
});
