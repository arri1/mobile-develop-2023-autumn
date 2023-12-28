import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Settings = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={"Logout"}
        onPress={() => {
          nav.replace("Login");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(255,192,203)",
  },
});
export default Settings;
