import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Counter: {count}</Text>
      <Button title="нажать" onPress={increment} />
    </View>
  );
}
