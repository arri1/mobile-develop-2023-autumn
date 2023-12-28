import { View, StyleSheet, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slicecount";
import { useState } from "react";
import Button from "../components/Button";

const Lab4 = () => {
  const [num, setNum] = useState(0);
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
      <Button title="+" onPress={() => dispatch(increment())} />
      <Button title="-" onPress={() => dispatch(decrement())} />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setNum(text)}
        placeholder="10"
        placeholderTextColor="rgba(42, 61, 69, 0.51)"
      />
      <Button
        title="Прибавить"
        onPress={() => dispatch(incrementByAmount(Number(num)))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(221, 201, 180)",
  },
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "rgba(42, 61, 69, 1)",
    fontSize: 20,
  },
  input: {
    width: 50,
    height: 50,
    marginBottom: 22,
    padding: 10,
    backgroundColor: "rgba(117, 92, 89, 0.31)",
    color: "rgba(42, 61, 69, 1)",
    borderRadius: 25,
    fontSize: 20,
    textAlign: "center",
  },
});
export default Lab4;
