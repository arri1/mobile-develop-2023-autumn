import { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const expensiveFunction = () => {
  let i = 0;
  while (i < 20000000) i++;
  return i;
};

const Lab3 = () => {
  const [memoNum, setMemoNum] = useState(0);
  const [num, setNum] = useState(0);
  const memoizeExpensiveFunction = useMemo(
    () => expensiveFunction("fromUseMemo"),
    []
  );
  const memoIterate = () => {
    setMemoNum(memoizeExpensiveFunction);
  };
  const iterate = () => {
    setNum(expensiveFunction("iterate without memo"));
  };
  const resetState = () => {
    setNum(0);
    setMemoNum(0);
  };
  return (
    <View style={styles.container}>
      <Text>Результат сложного вычисления: {memoNum}</Text>
      <Button title={"Вычислить с Memo"} onPress={memoIterate} />
      <Text>Результат сложного вычисления без usememo: {num}</Text>
      <Button title={"Вычислить без Memo"} onPress={iterate} />
      <Button title={"Обнулить"} onPress={resetState} />
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
});
export default Lab3;
