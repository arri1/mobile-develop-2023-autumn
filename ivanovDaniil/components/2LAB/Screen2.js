import React, { useEffect, useState } from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableHighlight,
	FlatList,
	Button,
} from "react-native";

export default function Screen2() {
	const [data, setData] = useState([]);

	getAPIdata = async () => {
		const url = "https://jsonplaceholder.typicode.com/users";
		let result = await fetch(url);
		result = await result.json();
		setData(result);
	};
	useEffect(() => {
		getAPIdata();
	});

	return (
		<View>
			<Text>API CALL</Text>
			<View>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<View>
							<Text>№{item.id}.  {item.name}</Text>
						</View>
					)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	but: {},
});
