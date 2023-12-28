import { useState } from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";
import React from "react";

const Lab1 = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(255,192,203)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        style={{ fontSize: 20, color: "green" }}
        styleDisabled={{ color: "red" }}
        onPress={handleClick}
        title="Press Me! "
      ></Button>
      <Text>Ты нажал на кнопку {count} раз</Text>
    </View>
  );
};

export default Lab1;
