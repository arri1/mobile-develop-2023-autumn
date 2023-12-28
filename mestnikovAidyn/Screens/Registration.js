import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const Registration = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(221, 201, 180)",
      }}
    >
      <Button
        title={"Back"}
        onPress={() => {
          nav.replace("Login");
        }}
      />
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={styles.input}
            textAlign="center"
            allowFontScaling
            placeholder="Email"
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  colorcontainer: {
    width: 316,
    height: 290,
    margin: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(117, 92, 89, 0.31)",
    borderRadius: 25,
  },
  input: {
    width: 258,
    height: 50,
    marginBottom: 22,
    padding: 10,
    backgroundColor: "rgba(117, 92, 89, 0.31)",
    borderRadius: 25,
    fontSize: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default Registration;
