import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { updateEmail, updatePassword, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
const Settings = ({ navigation }) => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangeEmail = async () => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      console.log("Email changed successfully");
    } catch (error) {
      console.error("Email change failed", error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      await updatePassword(auth.currentUser, newPassword);
      console.log("Password changed successfully");
    } catch (error) {
      console.error("Password change failed", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Auth");
    } catch (error) {
      console.error("Logout failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Change Email:</Text>
      <TextInput
        placeholder="New Email"
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)}
        style={styles.input}
      />
      <Button
        title="Change Email"
        onPress={handleChangeEmail}
        color="#1E78FF"
      />

      <Text style={styles.sectionTitle}>Change Password:</Text>
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button
        title="Change Password"
        onPress={handleChangePassword}
        color="#1E78FF"
      />

      <Text style={styles.sectionTitle}>Logout:</Text>
      <Button title="Logout" onPress={handleLogout} style={{ margin: 30 }} color="#1E78FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default Settings;
