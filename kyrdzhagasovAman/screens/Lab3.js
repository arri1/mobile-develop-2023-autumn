import { useMemo, useState } from "react";
import { View, Text } from "react-native";
import Button from "../components/Button";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation =  useMemo( () => {
    // Это сложное вычисление, занимающее много времени
    console.log("Выполняется сложное вычисление...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  }, []);

  /*const expensiveCalculation2 = () => {
    console.log("Выполняется сложное вычисление...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  };
  const a = expensiveCalculation2()*/

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
        Результат сложного вычисления: {expensiveCalculation} + {count}
      </Text>
      <Text>Счетчик: {count}</Text>
      <Button title={"Увеличить счетчик"} onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Lab3;
