import { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Components/Button";


const expensiveFunction = () => {
  let i = 0;
  while (i < 50000000) i++;
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
      <View style={styles.container2}> 
      <Text>Hard solve with memo: {memoNum}</Text>
      <Button title={"Yes Memo"} onPress={memoIterate} />
      <Text>Hard solve with NO usememo: {num}</Text>
      <Button title={"NO Memo"} onPress={iterate} />
      <Button title={"Clear"} onPress={resetState} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "normal",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(240, 221, 150)",
  },
  container2: {
    marginTop: 30,
    justifyContent: "normal",
    alignItems: "center",
    flex: 1,
    gap: 10,
    
  },
});

export default Lab3;