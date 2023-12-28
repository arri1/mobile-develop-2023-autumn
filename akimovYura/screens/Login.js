import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
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
        nav.push("TabNav");
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
            placeholderTextColor="#CCCCCA"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="#CCCCCA"
          />
          <Button title="Login" onPress={handleSubmit} />
          <Button
            title="Registration"
            onPress={() => {
              nav.push("Registry");
            }}
          />
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
    height: 290,
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
    backgroundColor: "rgb(240, 221, 150)",
    borderRadius: 25,
    fontSize: 18,
 
  },
});
export default Login;