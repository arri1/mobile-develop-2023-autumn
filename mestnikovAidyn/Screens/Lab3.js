import { useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const expensiveCalculation = () => {
  let i = 0;
  while (i < 100000000) i++;
  return i;
};

export default function App() {
  const [memoNum, setMemoNum] = useState(0);
  const [num, setNum] = useState(0);
  const memoexpensiveCalculation = useMemo(
    () => expensiveCalculation("fromUseMemo"),
    []
  );
  const memoIterate = () => {
    setMemoNum(memoexpensiveCalculation);
  };
  const iterate = () => {
    setNum(expensiveCalculation("iterate without memo"));
  };
  const resetState = () => {
    setNum(0);
    setMemoNum(0);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Result: {memoNum}</Text>
      <TouchableOpacity style={styles.button}
          onPress={() => {
            memoIterate();
          }}>
        <Text style={styles.text}>Expensive Calculation with useMemo</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Result: {num}</Text>
      <TouchableOpacity style={styles.button}
          onPress={() => {
            iterate();
          }}>
        <Text style={styles.text}>Expensive Calculation without useMemo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
          onPress={() => {
            resetState();
          }}>
        <Text style={styles.text}>reset</Text>
      </TouchableOpacity>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "end",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#696969',
    gap: 10,
  },
  text: {
    color: "cyan", 
    fontSize: 14,
  },
  button: {
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
