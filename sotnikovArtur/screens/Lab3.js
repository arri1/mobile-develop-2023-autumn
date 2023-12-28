import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useState, useEffect, useMemo } from "react";

export default function Lab3() {
  const [cocktail, setCocktail] = useState({});

  const fetchData = async () => {
    const cocktailName = "white russian";
    return await fetch(
      "https://api.api-ninjas.com/v1/cocktail?name=" + cocktailName,
      {
        headers: {
          "X-API-KEY": "kDBmMuhBE/DxnRbZidkBsw==nhxA8AX1e6PsFYEu",
          "Content-Type": "application/json",
        },
      }
    ).then(async (response) => {
      const jsonData = await response.json();
      return jsonData[0];
    });
  };

  const refresh = async () => {
    setCocktail(await fetchData());
  };

  const datamemo = useMemo(async () => await fetchData(), []);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => refresh()}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Verdana",
            textAlign: "center",
            color: "white",
          }}
        >
          Обновить без memo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={async () => setCocktail(await datamemo)}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Verdana",
            textAlign: "center",
            color: "white",
          }}
        >
          Обновить с memo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCocktail({})}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Verdana",
            textAlign: "center",
            color: "white",
          }}
        >
          Удалить
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>{cocktail.name}</Text>
      <FlatList
        style={styles.flatList}
        data={cocktail.ingredients}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
      <Text style={styles.instructions}>{cocktail.instructions}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "20px",
    backgroundColor: "lightblue",
    fontFamily: "Ariel",
  },
  flatList: {
    flexGrow: 0,
  },
  text: {
    color: "black",
    fontSize: "33px",
    textAlign: "center",
  },
  instructions: {
    fontSize: 18,
    width: "70%",
    textAlign: "center",
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    textAlign: "center",
  },
});
