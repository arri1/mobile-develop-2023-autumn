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
            setCount(count ** 2);
          }}
          title={"** 2"}
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
          title={"Обновить"}
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
    backgroundColor: "rgb(200, 200, 140)",
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    color: "black",
    fontSize: 32,
  },
  whitecontainer: {
    width: 296,
    height: 330,
    alignItems: "center",
    backgroundColor: "rgba(170, 180, 140, 1)",
    borderRadius: 40,
  },
});
