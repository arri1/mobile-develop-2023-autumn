import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	Button,
	Image,
	TouchableOpacity,
} from "react-native";
import React from "react";

export default function Header() {
	return (
		<View style={styles.main}>
			<Text style= {styles.text}>ToDo'шка</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	main: {
		height: 50,
		backgroundColor: "black",
		paddingTop: 1,
		
	},
	text: {
		fontSize: 18,
		color: "#ff4f",
		textAlign: "center",

	}
});
