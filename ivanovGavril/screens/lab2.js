import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function Lab2() {
  const createTwoButtonAlert = () =>
    Alert.alert("useEffect", "This is Alert called by useEffect", [
      {
        text: "hello",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "world", onPress: () => console.log("OK Pressed") },
    ]);
  useEffect(() => {
    createTwoButtonAlert();
  }, []);
  return (
    <View style={styles.container}>
      <Text>useEffect</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
