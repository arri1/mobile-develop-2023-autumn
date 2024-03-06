import React, { useState, useMemo } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { counterSlice } from "../store";

const Lab5 = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const dispatch = useDispatch();

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
    dispatch(counterSlice.actions.increment());
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo - 1);
    dispatch(counterSlice.actions.decrement());
  };

  const reset = () => {
    setCounterOne(0);
    setCounterTwo(0);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 50000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={incrementOne}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.taskText}>{counterOne}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={incrementTwo}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.taskText}>{counterTwo}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={reset}>
        <Text style={styles.resetButtonText}>Очистить</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 120,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    width: "80%",
    marginBottom: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: "#1244C5",
    width: 100,
    height: 100,
  },
  buttonText: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
    lineHeight: 70,
  },
  resetButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  list: {
    width: "100%",
    marginTop: 1,
  },
  task: {
    backgroundColor: "#87cefa",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    color: "black",
    padding: 10,
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Lab5;
