import { Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          height: 40,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "black",
        }}
        onPress={() => {
          setCount(count - 1);
        }}
      >
        <Text style={{ color: "white" }}>-1</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity
        style={{
          height: 40,
          width: 100,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backgroundColor: "black",
        }}
        onPress={() => {
          setCount(count + 1);
        }}
      >
        <Text style={{ color: "white" }}>+1</Text>
      </TouchableOpacity>
    </View>
  );
}
