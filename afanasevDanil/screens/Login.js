import React from 'react';
import { useState } from "react";
import { View} from "react-native";
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
      }}
    >
          <TextInput
            onChangeText={onChangeLogin}
            textAlign="center"
            allowFontScaling
            placeholder="Username"
          />
          <TextInput
            onChangeText={onChangePass}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
          />
          <Button
            title="Login"
            onPress={() => {
              nav.replace("Tab");
            }}
          />
          <Button
            title="Sign up"
            onPress={() => {
              nav.push("Registration");
            }}
          />
        </View>
  );
};

export default Login;
