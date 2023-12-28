import { Button, Text, View } from "react-native";
import { useMemo, useState } from "react";

const Lab3 = (props) => {
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
      <Button
        title={"с useMemo"}
        onPress={() => props.navigation.navigate("lab3.1")}
      />
      <Button
        title={"без useMemo"}
        onPress={() => props.navigation.navigate("lab3.2")}
      />
    </View>
  );
};

export const Lab3Part1 = () => {
  const [count, setCount] = useState(0);
  const expensiveCalculation = useMemo(() => {
    console.log("Calculation with usememo");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  }, []);

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

export const Lab3Part2 = () => {
  const [count, setCount] = useState(0);
  const expensiveCalculation = () => {
    console.log("Calculation");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  };

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
        Результат сложного вычисления: {expensiveCalculation()} + {count}
      </Text>
      <Text>Счетчик: {count}</Text>
      <Button title={"Увеличить счетчик"} onPress={() => setCount(count + 1)} />
    </View>
  );
};
export default Lab3;
