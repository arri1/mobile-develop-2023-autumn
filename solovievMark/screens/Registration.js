import { useState } from "react";
import { View, StyleSheet, Button, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TextInput } from "react-native";
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
            placeholder="Login"
          />
          <TextInput
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            textAlign="center"
            placeholder="Password"
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer: {
    marginBottom: 22,
    marginTop: 10,
    padding: 10,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  colorcontainer: {
    width: 320,
    height: 320,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  button: {
    height: 50,
    width: 200,
    marginTop: 20,
    padding: 10,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
  },
  input: {
    height: 50,
    width: 200,
    marginTop: 20,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#F7F6F1",
    borderRadius: 25,
    fontSize: 18,
  },
});

export default Registration;
