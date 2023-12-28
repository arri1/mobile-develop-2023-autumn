import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./store";
import Button from "../components/Button";
import Buttong from "../components/Button g";
import Buttonb from "../components/Button b";

const Lab5 = () => {
  const backgroundColor = useSelector((state) => state.color);
  const dispatch = useDispatch();

  const handleColorChange = (color) => {
    dispatch(changeColor(color));
  };

  return (
    <View
      style={{
        backgroundColor,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          backgroundColor: "rgb(255, 0, 0)",
          marginBottom: 10,
        }}
        title="Red"
        onPress={() => handleColorChange("red")}
      ></Button>
      <Buttong
        style={{
          backgroundColor: "rgb(0, 128, 0)",
          marginBottom: 40,
        }}
        title="Green"
        onPress={() => handleColorChange("green")}
      ></Buttong>
      <Buttonb
        style={{
          backgroundColor: "blue",
        }}
        title="Blue"
        onPress={() => handleColorChange("blue")}
      ></Buttonb>
    </View>
  );
};

export default Lab5;
