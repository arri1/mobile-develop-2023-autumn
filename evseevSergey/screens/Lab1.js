import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Button, Text, View } from "react-native";
const Lab1 = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.main}>
      <Text style={styles.counter}>{count}</Text>
      <TouchableOpacity
        onPress={() => {
          setCount(count + 1);
        }}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
          I'M JUST A BUTTON
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Lab1;

export const styles = StyleSheet.create({
  main: {
    backgroundColor: "rgb(217,217,217)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  counter: {
    width: "95%",
    height: "50%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 32,
    marginTop: "25%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "90%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25%",
  },
});
