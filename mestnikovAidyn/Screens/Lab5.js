import { View, StyleSheet, Text, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../redux/slicecount";
import { useState } from "react";
import Button from "../components/Button";

const Lab5 = () => {
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
        placeholder="1"
        placeholderTextColor="blue"
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
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "cyan",
    fontSize: 20,
  },
  input: {
    width: 153,
    height: 50,
    marginBottom: 22,
    padding: 10,
    backgroundColor: "cyan",
    color: "blue",
    borderRadius: 16,
    fontSize: 20,
    textAlign: "center",
  },
});
export default Lab5;
