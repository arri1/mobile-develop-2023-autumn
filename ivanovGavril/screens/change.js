import { TouchableOpacity, View } from "react-native-web";
import { auth } from "./firebase";
import { EmailAuthProvider } from "@firebase/auth";
import { StyleSheet, Text } from "react-native";
import React from "react";

const ChangePassword = () => {
  const HandleChangePassword = async () => {
    const currentPass = window.prompt("Please enter current password");
    const newPass = window.prompt("Please enter new password");
    await auth.currentUser.updatePassword(newPass).then(() => {
      auth.currentUser.reauthenticateWithCredential(
        EmailAuthProvider.credential(auth.currentUser.email, currentPass)
      );
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={HandleChangePassword}>
        <Text style={styles.buttonText}>Change password</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
});
export default ChangePassword;
