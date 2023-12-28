import { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

const expensiveFunction = () => {
  let i = 0;
  while (i < 58000) i++;
  return i/5;
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
      <Text>С usememo: {memoNum}</Text>
      <Button title={"с Memo"} onPress={memoIterate} />
      <Text>Без usememo: {num}</Text>
      <Button title={"без Memo"} onPress={iterate} />
      <Button title={"Обновить"} onPress={resetState} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(200, 200, 140)",
  },
});
export default Lab3;
