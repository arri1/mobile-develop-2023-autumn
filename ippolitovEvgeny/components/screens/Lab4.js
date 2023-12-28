import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setBgColor } from "../Redux/colorSlice";

const Lab4 = ({ navigation }) => {
  const dispatch = useDispatch();
  const bgColor = useSelector((state) => state.color.bgColor);

  const colorButton = (color, text) => {
    const textColor = color === "white" ? "black" : "white";
    return (
      <TouchableOpacity
        style={[styles.colorChangeButton, { backgroundColor: color }]}
        onPress={() => dispatch(setBgColor(color))}
      >
        <Text style={{ color: textColor }}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <View style={styles.buttonContainer}>
        {colorButton("white", "white")}
        {colorButton("#00FF00", "green")}
        {colorButton("#FFD700", "yellow")}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  colorChangeButton: {
    padding: 10,
    margin: 9,
    borderRadius: 5,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Lab4;
