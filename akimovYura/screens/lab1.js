import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";

const Lab1 = () => {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
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
          setCount(count ** (1/2));
        }}
      >
        <Text style={styles.text}>sqrt</Text>
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
    backgroundColor: "rgb(240, 221, 150)",
  },
  text: {
    color: "green", 
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    height: 40,
    width: 140,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "orange",
  },
});
export default Lab1;