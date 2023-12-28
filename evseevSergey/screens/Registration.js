import { React, useState } from "react";
import { View, Text, Button, ToastAndroid } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { gql, useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SIGNUP = gql`
  mutation ($name: String!, $login: String!, $pass: String!) {
    signup(name: $name, login: $login, pass: $pass) {
      name
      login
      pass
    }
  }
`;

const generateUserId = () => {
  const Alphabet = [
    "ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz0123456789",
  ];
  var generatedID = "";
  for (i = 0; i < 7; i++) {
    generatedID += Alphabet[Math.floor(Math.random() * Alphabet.length())];
  }
  return generatedID;
};

const RegistrationScreen = () => {
  const [id, setId] = useState("");
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const [signupMutation, { data, loading, error }] = useMutation(SIGNUP);

  return (
    <SafeAreaView>
      <TextInput
        style={{ backgroundColor: "white", padding: 6 }}
        onChange={setName}
        placeholder="Name"
      />
      <TextInput
        style={{ backgroundColor: "white", padding: 6 }}
        onChange={setLogin}
        placeholder="Login"
      />
      <TextInput
        style={{ backgroundColor: "white", padding: 6 }}
        onChange={setPass}
        placeholder="Password"
      />
      <Button
        title="Register"
        onPress={() => {
          signupMutation(name, login, pass);
        }}
      />
    </SafeAreaView>
  );
};

export default RegistrationScreen;
