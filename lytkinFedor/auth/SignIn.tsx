import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  function logIn(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
        setSuccess("SUCCESS!");
      })
      .catch((error) => {
        console.log(error);
        setError("SORRY, COULDN'T FIND YOUR ACCOUNT");
      });
  }
  return (
    <View>
      <Text>Log in</Text>
      <TextInput
        style={styles.input}
        placeholder="Please enter your email"
        value={email}
        onChangeText={setEmail}
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.input}
        placeholder="Please enter your password"
        value={password}
        onChangeText={setPassword}
        textContentType="password"
      />
      <TouchableOpacity onPress={logIn}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>{error ? <Text style={{ color: "red" }}>{error}</Text> : ""}</Text>
      <Text>{success}</Text>
    </View>
  );
};

const styles = {
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
};
export default SignIn;
