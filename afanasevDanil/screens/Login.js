import React from "react";
import { useState } from "react";
import { View } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  const [login, onChangeLogin] = useState("Login");
  const [pass, onChangePass] = useState("Password");

  const nav = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255,192,203)",
      }}
    >
      <TextInput
        style={{
          width: 258,
          height: 40,
          marginBottom: 25,
          padding: 10,
          backgroundColor: "rgba(117, 92, 89, 0.31)",
          borderRadius: 50,
          fontSize: 20,
        }}
        onChangeText={onChangeLogin}
        textAlign="center"
        allowFontScaling
        placeholder="Username"
      />
      <TextInput
        style={{
          width: 258,
          height: 40,
          marginBottom: 22,
          padding: 10,
          backgroundColor: "rgba(117, 92, 89, 0.31)",
          borderRadius: 25,
          fontSize: 20,
        }}
        onChangeText={onChangePass}
        textAlign="center"
        allowFontScaling
        placeholder="Password"
      />
      <Button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
        title="Login"
        onPress={() => {
          nav.replace("Tab");
        }}
      />
      <Button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 22,
          top: 10,
          marginBottom: 22,
        }}
        title="Sign up"
        onPress={() => {
          nav.push("Registration");
        }}
      />
    </View>
  );
};

export default Login;
