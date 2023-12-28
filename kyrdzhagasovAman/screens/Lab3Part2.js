import { useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

const Lab3Part2 = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = () => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += 1;
    }
    return result;
  };

  const a = expensiveCalculation();

  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>
        Результат сложного вычисления: {a} + {count}
      </Text>
      <Text>Счетчик: {count}</Text>
      <Button title={"Увеличить счетчик"} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Lab3Part2;
