import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Settings = ({ navigation }) => {
  const handleLogout = () => {
    navigation.navigate("Auth");
  };

  return (
    <View style={styles.container}>
      <Text>Logout</Text>
      <Button title="Logout" onPress={handleLogout} color="#1E78FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
  linkText: {
    color: "#1E78FF",
    marginTop: 10,
  },
});

export default Settings;
