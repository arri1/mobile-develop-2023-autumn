import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";

export default function Lab2() {
  const [chuck, setChuck] = useState({});

  const getJoke = () => {
    fetch("https://api.api-ninjas.com/v1/chucknorris?", {
      headers: {
        "X-API-KEY": "kDBmMuhBE/DxnRbZidkBsw==nhxA8AX1e6PsFYEu",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setChuck(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonGray} onPress={() => getJoke()}>
        <Text
          style={{
            fontSize: 23,
            fontFamily: "Verdana",
            textAlign: "center",
            color: "white",
          }}
        >
          Random chuckjoke
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          width: 350,
          top: 20,
          fontSize: 15,
          textAlign: "center",
          color: "black",
        }}
      >
        {chuck.joke}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGray: {
    margin: 0,
    height: 50,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});
