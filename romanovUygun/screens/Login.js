import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  IBMPlexMono_400Regular,
} from "@expo-google-fonts/ibm-plex-mono";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@apollo/client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useAuth();
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

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
    backgroundColor: "#F7F6F1",
    borderRadius: 25,
    fontSize: 18,
    fontFamily: "IBMPlexMono_400Regular",
  },
});
export default Login;
