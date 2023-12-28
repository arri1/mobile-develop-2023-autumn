import { useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Button from "../components/Button";
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
      <Button 
          title="useMemo"
          onPress={() => {
            memoIterate();
          }}>
      </Button>
      <Text style={styles.text}>Result: {num}</Text>
      <Button 
          title="no useMemo"
          onPress={() => {
            iterate();
          }}>
      </Button>
      <Button 
          title="reset"
          onPress={() => {
            resetState();
          }}>
      </Button>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: 'white',
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
