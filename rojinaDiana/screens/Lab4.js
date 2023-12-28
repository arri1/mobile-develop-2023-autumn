import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ApolloProvider } from "@apollo/client/react";

const Lab4 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      navigation.navigate("Home");
    } else {
      alert("Неверное имя пользователя или пароль");
    }
  };

  return (
    <ApolloProvider client={client}>
      <View>
        <Text>Логин</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Имя пользователя"
        />
        <Text>Пароль</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Пароль"
        />
        <Button title="Войти" onPress={handleLogin} />
      </View>
    </ApolloProvider>
  );
};

export default Lab4;
