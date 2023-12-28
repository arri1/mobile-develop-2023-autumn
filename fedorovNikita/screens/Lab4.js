import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../firebase";

const Lab4 = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleChangePassword = () => {
    const user = auth.currentUser;

    if (user) {
      user.updatePassword(newPassword)
        .then(() => {
          alert('Success', 'Password updated successfully!');
        })
        .catch((error) => {
          alert('Error', `Failed to update password: ${error.message}`);
        });
    } else {
      alert('Error', 'User not authenticated');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email} </Text>
      <Button
        onPress={handleLogout}
        title={"Logout"}
      />
      <View style={styles.space}></View>
      <Text>Enter new password:</Text>
      <TextInput
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <View style={styles.space}></View>
      <Button title="Change Password" onPress={handleChangePassword} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
  },
  textinput: {
    borderColor: '#ecf0f1',
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Lab4;