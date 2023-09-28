import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";

const Lab1 = ({ navigation }) => {
  const [bgColor, setBgColor] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <TouchableOpacity
        style={styles.colorChangeButton}
        onPress={() => setBgColor("white")}
      >
        <Text>White</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.colorChangeButton}
        onPress={() => setBgColor("red")}
      >
        <Text>Red</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.colorChangeButton}
        onPress={() => setBgColor("blue")}
      >
        <Text>Blue</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  colorChangeButton: {
    backgroundColor: "lightblue",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default Lab1;
