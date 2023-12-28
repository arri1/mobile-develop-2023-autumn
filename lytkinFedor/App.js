import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import lab2 from "./labs/lab2";
import lab3 from "./labs/lab3";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles2.sectionTitle}>Hello World!</Text>
      <Text>Lytkin Fedor FIIT-20</Text>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: 15 }}>{count}</Text>
        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 1)}
        >
          <Text>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 10)}
        >
          <Text>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 10)}
        >
          <Text>-10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 1)}
        >
          <Text>-1 </Text>
        </TouchableOpacity>
      </View>

      <StatusBar />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ToDo" component={lab2} />
        <Tab.Screen name="UseMemo" component={lab3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles2 = StyleSheet.create({
  container: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 32,
    paddingHorizontal: 24,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  roundButtonNumber: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#D2CCC7",
  },
  roundButtonSign: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#906A4B",
  },
  roundButtonFunc: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#5F6363",
  },
  roundButtonZero: {
    marginTop: 1,
    width: 200,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#D2CCC7",
  },
  symbolText: {
    fontSize: 50,
  },
  symbolTextSmall: {
    fontSize: 30,
  },
});
