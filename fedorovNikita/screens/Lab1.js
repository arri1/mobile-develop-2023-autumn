import { Text, View } from "react-native";
import { useState } from "react";
import Button from "../components/Button";

const Lab1 = () => {
  const [text, setText] = useState(1000);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
      }}
    >
      <Text>{text}</Text>
      <Button
        onPress={() => {
          setText(text - 7);
        }}
        title={"Button"}
      />
    </View>
  );
}

export default Lab1;
