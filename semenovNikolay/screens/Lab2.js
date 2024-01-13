import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  StyleSheet,
} from "react-native";
import Button from "../components/Button";


const Lab2 = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    StatusBar.setBackgroundColor(backgroundColor);
  }, [styles.backgroundColor]);

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Button
        title="white"
        onPress={() => handleColorChange("white")}
        style={styles.commonButton}
      />
      <Button
        title="pink"
        onPress={() => handleColorChange("pink")}
        style={styles.commonButton}
      />
      <Button
        title="yellow"
        onPress={() => handleColorChange("yellow")}
        style={styles.commonButton}
      />
      <Button
        title="red"
        onPress={() => handleColorChange("red")}
        style={styles.commonButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Lab2;