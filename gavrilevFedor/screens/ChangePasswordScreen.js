import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const ChangePasswordScreen = () => {
  const [newPassword, setNewPassword] = useState("");

  const changePassword = () => {
    const user = firebase.auth().currentUser;

    if (user) {
      user
        .updatePassword(newPassword)
        .then(() => {
          Alert.alert("Success", "Password changed successfully");
        })
        .catch((error) => {
          Alert.alert("Error", error.message);
        });
    } else {
      Alert.alert("Error", "User not authenticated");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
        placeholder="Enter new password"
        secureTextEntry={true}
      />
      <Button title="Change Password" onPress={changePassword} />
    </View>
  );
};

export default ChangePasswordScreen;
