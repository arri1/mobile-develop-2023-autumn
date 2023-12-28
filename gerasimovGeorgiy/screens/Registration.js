import { Button, TextInput, View } from "react-native";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const REGISTER = gql`
  mutation ($data: RegistrationUserInput!) {
    registerUser(data: $data) {
      token
    }
  }
`;

const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [mutateFunction, { data, loading, error }] = useMutation(REGISTER);
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, gap: 10, alignItems: "center", margin: 16 }}>
      <TextInput
        style={{ backgroundColor: "white", width: "100%", padding: 6 }}
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%", padding: 6 }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%", padding: 6 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title={"Register"}
        onPress={() => {
          mutateFunction({
            variables: {
              data: {
                login,
                name,
                password,
              },
            },
          })
            .then((data) => {
              console.log(data);
              const token = data?.data?.regsterUser?.token;
              Toast.show({
                type: "success",
                text1: "success",
              });
              const storeData = async () => {
                try {
                  await AsyncStorage.setItem("token", token);
                } catch (e) {
                  // saving error
                }
              };
              storeData();
              nav.goBack();
            })
            .catch((e) => {
              Toast.show({
                type: "error",
                text1: e.message,
              });
            });
        }}
      />
    </View>
  );
};

export default Registration;
