import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const Login = () => {
  const [login, onChangeLogin] = useState("Login");
  const [pass, onChangePass] = useState("Password");

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
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLogin}
            textAlign="center"
            allowFontScaling
            placeholder="Username"
            placeholderTextColor="rgba(42, 61, 69, 0.51)"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="rgba(42, 61, 69, 0.51)"
          />
          <Button
            title="Login"
            onPress={() => {
              nav.replace("Tab");
            }}
          />
          <Button
            title="Sign up"
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
});
export default Login;
