import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen1 from "./components/1LAB/Screen1";
import Lab2 from "./components/2lab/2lab";
import { useState } from "react";

const Tab = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name="1lab" component={Screen1} />
        <Tab.Screen name="2lab" component={Lab2} />
			</Tab.Navigator>
      
		</NavigationContainer>
	);
}
const styles = StyleSheet.create({
	navigator: {
		backgroundColorcolor: "#4f7ec4",
	},
});
