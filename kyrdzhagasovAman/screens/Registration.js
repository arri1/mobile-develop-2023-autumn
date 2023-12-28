import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { registration } from "../http/userService";

const Registration = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [span, setSpan] = useState("");

  const nav = useNavigation();

  const signUp = async () => {
    if (password == password2) {
      await registration(username, password)
        .then(() => {
          console.log("Регистрация прошла успешно");
          nav.push("login");
        })
        .catch((err) => {
          setSpan(err.message);
        });
    }
  };
  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text
        style={{
          color: "red",
          fontSize: 16,
          paddingBottom: 10,
        }}
      >
        {span}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Логин
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          width: "95%",
          padding: 6,
          borderRadius: 10,
        }}
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Пароль
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          width: "95%",
          padding: 6,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Повторите пароль
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          width: "95%",
          padding: 6,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        value={password2}
        onChangeText={(text) => setPassword2(text)}
      />

      <Button title={"Зарегистрироваться"} onPress={() => signUp()} />
      <Text>Есть аккаунт?</Text>
      <TouchableOpacity onPress={() => nav.replace("Login")}>
        <Text style={{ color: "blue", borderBottomColor: "blue" }}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Registration;
