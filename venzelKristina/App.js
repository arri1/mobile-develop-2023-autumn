import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={styles.text}>+ 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text style={styles.text}>- 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setCount(count * 2);
        }}
      >
        <Text style={styles.text}>* 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setCount(count / 2);
        }}
      >
        <Text style={styles.text}>/ 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setCount(count * 0);
        }}
      >
        <Text style={styles.text}>reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
  text: {
    color: "white", 
    fontSize: 20
  },
  button: {
    height: 40,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "red",
  },
});