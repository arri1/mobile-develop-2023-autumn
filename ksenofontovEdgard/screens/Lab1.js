import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Lab1() {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.container]}>
      <Text style={{ fontSize: 100, fontFamily: "Verdana" }}>{count}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count - 5)}
        >
          <Text style={styles.text}>-5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count + 5)}
        >
          <Text style={styles.text}>+5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count * 2)}
        >
          <Text style={styles.text}>*2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count / 2)}
        >
          <Text style={styles.text}>÷2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(0)}>
          <Text style={styles.text}>Reset</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
    fontFamily: "Verdana",
  },
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  buttonGray: {
    margin: 20,
    height: 50,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    color: "white",
  },
});
