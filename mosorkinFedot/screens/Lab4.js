import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ColorButton from "../components/buttons/ColorButton";
import ButtonsContainer from "../components/ButtonsContainer";
import { auth } from "../firebase";

const Lab4 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textEmail}>Email: {auth.currentUser?.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD66D5",
    alignItems: "center",
    justifyContent: "center",
  },
  textEmail: {
    fontSize: 20,
  },
});

export default Lab4;
