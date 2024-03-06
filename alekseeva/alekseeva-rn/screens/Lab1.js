import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../components/Button.js";

const colors = ["red", "#1244C5", "green"];
const Lab1 = () => {
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
      <Text
        style={{
          fontSize: 96,
        }}
      >
        {count}
      </Text>
      <Button
        height={200}
        width={200}
        borderRadius={50}
        onPress={() => {
          setCount(count + 1);
        }}
        color={colors[count % 3]}
      />
    </View>
  );
};

export default Lab1;
