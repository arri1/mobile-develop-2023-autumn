import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [copyPassword, setCopyPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  function register(e) {
    e.preventDefault();
    if (copyPassword !== password) {
      setError("Passwords didn't match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setCopyPassword("");
        setPassword("");
        setSuccess("Вы зарегистрировались");
      })
      .catch((error) => {
        console.log(error);
        setSuccess("error");
      });
  }
  return (
    <View>
      <Text>Create an account</Text>
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
      <TextInput
        style={styles.input}
        placeholder="Please enter your password again"
        value={copyPassword}
        onChangeText={setCopyPassword}
        textContentType="password"
      />
      <TouchableOpacity onPress={register}>
        <Text>Create</Text>
      </TouchableOpacity>
      <Text>{error ? <p style={{ color: "red" }}>{error}</p> : ""}</Text>
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
  success: {
    fontSize: 32,
    color: "green",
  },
  title: {
    fontSize: 64,
  },
};

export default SignUp;
