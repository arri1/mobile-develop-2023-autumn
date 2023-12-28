import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Text, View, TextInput } from "react-native";
import Button from "../components/Button";
import { changeData } from "../http/userService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const EditScreen = () => {
  const [username, setUsername] = useState("");
  const [span, setSpan] = useState("");
  const dispatch = useDispatch();
  const getId = useSelector((state) => {
    return state.user.id;
  });

  nav = useNavigation();
  const Edit = async () => {
    await changeData(getId, username)
      .then(async (data) => {
        console.log(data);
        dispatch({ type: "UPDATE_SUCCESS", payload: data });
        nav.replace("lab4Home");
      })
      .catch((err) => {
        setSpan(err.message);
      });
  };

  return (
    <View
      style={{
        padding: 14,
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
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Новое имя пользователя
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
      <View
        style={{
          padding: 20,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button title={"Отправить"} onPress={() => Edit()} />
      </View>
    </View>
  );
};

export default EditScreen;
