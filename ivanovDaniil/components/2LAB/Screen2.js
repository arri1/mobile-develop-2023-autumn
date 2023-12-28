import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	TouchableOpacity,
	StyleSheet,
	View,
	FlatList,
	Text,
	Button,
	Image,
	Alert,
} from "react-native";
const Lab2 = () => {
	const [cat, setCat] = useState([]);
	const [loading, setLoading] = useState(false);

	const getNewPic = () => {
		setLoading(true);
		axios
			.get("https://api.thecatapi.com/v1/images/search")
			.then((resp) => {
				setCat(resp.data[0]);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	useEffect(() => {
		getNewPic();
	}, []);

	return (
		<View style={styles.main}>
			<Text style={styles.text}>Это все Котики котики котики</Text>
			<Image source={{ uri: cat.url }} style={styles.img}></Image>

			<TouchableOpacity
				loading={loading}
				onPress={() => {
					getNewPic();
				}}
				style={styles.button}>
				<Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
					FIND NEW CAT
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Lab2;

export const styles = StyleSheet.create({
	main: {
		backgroundColor: "yellow",
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
	},
	text:{
		backgroundColor:'green',
		flex:0.5,
		justifyContent:"center",
		fontSize:25,
		
	},
	button: {
		backgroundColor: "black",
		borderRadius: 15,
		width: "90%",
		height: "10%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: "25%",
	},
	img: {
		width: "90%",
		height: "45%",
		borderWidth: 1,
		borderColor: "black",
		marginTop: "25%",
	},
});
