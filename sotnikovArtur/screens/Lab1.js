import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Lab1() {
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.container]}>
      <Text style={{ fontSize: 50, fontFamily: "Verdana" }}>{count}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count - 10)}
        >
          <Text style={{ fontSize: 25, fontFamily: "Verdana" }}>-10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => setCount(count + 10)}
        >
          <Text style={{ fontSize: 25, fontFamily: "Verdana" }}>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGray} onPress={() => setCount(0)}>
          <Text style={{ fontSize: 25, fontFamily: "Verdana" }}>Reset</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
  buttonsContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonGray: {
    margin: 20,
    height: 50,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});
