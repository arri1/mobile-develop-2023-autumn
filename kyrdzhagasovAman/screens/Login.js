import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { login } from "../http/userService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [span, setSpan] = useState("");

  const dispatch = useDispatch();
  const nav = useNavigation();

  const signIn = async () => {
    await login(username, password)
      .then(async (data) => {
        await AsyncStorage.setItem("token", data.token);
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        nav.replace("Tab");
      })
      .catch((err) => {
        setSpan(err.message);
      });
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
          width: "100%",
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
          width: "100%",
          padding: 6,
          borderRadius: 10,
        }}
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title={"Войти"} onPress={() => signIn()} />
      <Text>Нет аккаунта?</Text>
      <TouchableOpacity onPress={() => nav.replace("Registration")}>
        <Text style={{ color: "blue" }}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
