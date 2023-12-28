import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Redux/numSlice";

export default function Lab4() {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <View style={[styles.container]}>
      <Text style={{ fontSize: 50, fontFamily: "Verdana" }}>{count}</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => dispatch(decrement())}
        >
          <Text style={{ fontSize: 25, fontFamily: "Verdana" }}>-5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGray}
          onPress={() => dispatch(increment())}
        >
          <Text style={{ fontSize: 25, fontFamily: "Verdana" }}>+5</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonGray: {
    margin: 20,
    height: 50,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    backgroundColor: "orange",
  },
});
