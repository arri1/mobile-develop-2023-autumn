import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native";

const lab1 = () => {
  const [isSad, setIsSad] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.commonText}>
        Ya doter, and I {isSad ? "died" : "didnt die"}!
      </Text>
      <Button
        style={styles.commonButton}
        onPress={() => {
          setIsSad(false);
        }}
        disabled={!isSad}
        title={isSad ? "Are you sad?" : "I am sad!"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 1,
    backgroundColor: "#87cefa",
    width: 100,
    height: 80,
  },
  commonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default lab1;
