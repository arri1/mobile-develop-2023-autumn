import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";
import { gql, useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    if (login && password) {
      try {
        await createUserWithEmailAndPassword(auth, login, password);
        nav.push("Login");
      } catch (err) {
        console.log("Error:", err.message);
      }
    }
  };
  const nav = useNavigation();
  return (
    <View
      style={{
        margin: 22,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Login"
            placeholderTextColor="#CCCCCA"
          />

          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="#CCCCCA"
          />
          <Button title="Sign Up" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer: {
    marginBottom: 22,
  },
  colorcontainer: {
    width: 316,
    height: 230,
    margin: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  input: {
    height: 52,
    marginTop: 22,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#F7F6F1",
    borderRadius: 25,
    fontSize: 18,
    fontFamily: "IBMPlexMono_400Regular",
    color: "#CCCCCA",
  },
});

export default Registration;
