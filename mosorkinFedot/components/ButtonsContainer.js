import React from "react";
import { StyleSheet, View } from "react-native";
import SizeButton from "./buttons/SizeButton";

export default function ButtonsContainer({
  decreaseImageSize,
  increaseImageSize,
}) {
  return (
    <View style={styles.buttonsContainer}>
      <SizeButton
        style={styles.sizeButtonLeft}
        onPress={decreaseImageSize}
        text="-"
      />
      <SizeButton
        style={styles.sizeButtonRight}
        onPress={increaseImageSize}
        text="+"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 100,
  },
  sizeButtonLeft: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#FFD300",
    marginLeft: 60,
    marginRight: 20,
  },
  sizeButtonRight: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "#FFD300",
    marginRight: 60,
    marginLeft: 20,
  },
});
