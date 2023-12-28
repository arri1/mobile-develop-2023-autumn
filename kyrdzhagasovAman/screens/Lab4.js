import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const Lab4 = ({ navigation }) => {
  const [storageData, setStorageData] = useState("");
  useEffect(() => {
    async function getToken() {
      setStorageData(await AsyncStorage.getItem("token"));
    }
    getToken();
  });

  const getId = useSelector((state) => {
    return state.user.id;
  });
  const getUsername = useSelector((state) => {
    return state.user.username;
  });
  const getRole = useSelector((state) => {
    return state.user.role;
  });

  return (
    <View
      style={{
        padding: 14,
        gap: 10,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        ID
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {getId}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Username
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {getUsername}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        role
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {getRole}
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        AsyncStorage
      </Text>
      <Text
        style={{
          fontSize: 16,
        }}
      >
        {storageData}
      </Text>
      <View
        style={{
          padding: 14,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Button
          title={"Изменить имя"}
          onPress={() => navigation.navigate("EditScreen")}
        />
      </View>
    </View>
  );
};

export default Lab4;
