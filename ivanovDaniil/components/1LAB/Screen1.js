import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import Header from "./Header";
import ListItem from "./ListItem";
import Form from "./Form";
export default function Screen1() {
	const [listOfItems, setListOfItems] = useState([
		{ text: "Сходить в кино", key: "0" },
		{ text: "Сделать ЛАБУ", key: "1" },
		{ text: "поесть", key: "2" },
		{ text: "Поспать", key: "3" },
	]);
	const addHandler = (text) => {
		setListOfItems((list) => {
			return [
				{ text: text, key: Math.random().toString(36).substring(7) },
				...list,
			];
		});
	};
	const deleteHandler = (key) => {
		setListOfItems((list) => {
			return list.filter((listOfItems) => listOfItems.key != key);
		});
	};

	return (
		<View style={styles.main}>
			<Header />
			<Form addHandler={addHandler} />
			<View style={styles.flat}>
				<FlatList
					data={listOfItems}
					renderItem={({ item }) => (
						<ListItem el={item} deleteHandler={deleteHandler} />
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		width: "100%",
		height: "100%",
		backgroundColor: "black",
	},
	flat: {
		height: "72%",
	},
});
