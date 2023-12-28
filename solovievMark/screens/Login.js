import { Button, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../authComponents/useAuth";

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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLogin(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Login"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>Login</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            title="Registration"
            onPress={() => {
              nav.push("Registration");
            }}
          >
            <Text style={styles.text}>Registration</Text>
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

export default Login;
