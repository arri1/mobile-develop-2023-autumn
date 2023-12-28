import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useAuth();

  const handleSubmit = async () => {
    if (login && password) {
      try {
        await signInWithEmailAndPassword(auth, login, password);
        nav.push("Tab");
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
        backgroundColor: "white",
      }}
    >
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLogin(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Email"
            placeholderTextColor="white"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="white"
          />
          <Button title="Login" onPress={handleSubmit} />
          <Button
            title="Registration"
            onPress={() => {
              nav.push("Registration");
            }}
          />
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
    marginTop: 10,
  },
  
  input: {
    width: 258,
    height: 50,
    marginBottom: 22,
    padding: 10,
    backgroundColor: "cyan",
    borderRadius: 25,
    fontSize: 20,
  },
});
export default Login;
