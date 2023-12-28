import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lab1 from "./screens/Lab1";
import Lab2 from "./screens/Lab2";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1} />
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("./icons/icon.png")}
                style={styles.img}
              />
            </View>
          ),
        }}
        <Tab.Screen name="Lab2" component={Lab2} />
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("./icons/donut.png")}
                style={styles.img}
              />
            </View>
          ),
        }}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 30,
    width: 30,
  },
});
