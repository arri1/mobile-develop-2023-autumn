import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "../components/Button";

export default function Lab1() {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>{count}</Text>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title={"+ 1"}
        />
        <Button
          onPress={() => {
            setCount(count - 1);
          }}
          title={"- 1"}
        />
        <Button
          onPress={() => {
            setCount(count * 2);
          }}
          title={"* 2"}
        />
        <Button
          onPress={() => {
            setCount(count / 2);
          }}
          title={"/ 2"}
        />
        <Button
          onPress={() => {
            setCount(count * 0);
          }}
          title={"Reset"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(221, 201, 180)",
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    color: "rgba(42, 61, 69, 1)",
    fontSize: 32,
  },
  whitecontainer: {
    width: 296,
    height: 330,
    alignItems: "center",
    backgroundColor: "rgba(188, 172, 155, 1)",
    borderRadius: 40,
  },
});
