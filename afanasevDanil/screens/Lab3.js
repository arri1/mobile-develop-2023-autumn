import React, { useMemo, useState } from "react";
import { View, Text } from "react-native";
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
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(255,192,203)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          marginBottom: 10,
        }}
      >
        Результат сложного вычисления: {memoNum}
      </Text>
      <Button title={"Вычислить с Memo"} onPress={memoIterate} />
      <Text
        style={{
          marginBottom: 10,
        }}
      >
        Результат сложного вычисления без usememo: {num}
      </Text>
      <Button title={"Вычислить без Memo"} onPress={iterate} />
      <Button title={"Обнулить"} onPress={resetState} />
    </View>
  );
};

export default Lab3;
