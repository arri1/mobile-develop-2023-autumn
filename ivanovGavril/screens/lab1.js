import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function Lab1() {
  let [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        style={st.button}
        title="button"
        onPress={() => {
          setCount(count + 1);
        }}
      ></Button>
      <Button
        style={st.button}
        title="reset"
        onPress={() => {
          setCount(0);
        }}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
const st = StyleSheet.create({
  button: {
    height: 200,
    weight: 200,
    color: "#fff",
  },
});
