import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

const Lab1 = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((prev) => prev + 10);
  };

  const decreseCount = () => {
    setCount((prev) => prev - 10);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={addCount}>
        <Text>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreseCount}>
        <Text>-10</Text>
      </TouchableOpacity>
      <Text>{count}</Text>

      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});
export default Lab1;
