import React, { useState, useMemo, useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [color, setColor] = useState("white");

  const memoizedColor = useMemo(() => color, [color]);

  useEffect(() => {
    AsyncStorage.setItem("backgroundColor", memoizedColor);
  }, [memoizedColor]);

  useEffect(() => {
    AsyncStorage.getItem("backgroundColor").then((value) => {
      if (value) {
        setColor(value);
      }
    });
  }, []);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: memoizedColor }]}>
      <Button title="Red" onPress={() => changeColor("red")} />
      <Button title="Blue" onPress={() => changeColor("blue")} />
      <Button title="White" onPress={() => changeColor("white")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
