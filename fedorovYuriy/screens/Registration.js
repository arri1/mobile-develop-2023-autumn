import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { TextInput } from "react-native-gesture-handler";

const Registration = () => {
  const [login, onChangeLogin] = useState("Login");
  const [pass, onChangePass] = useState("Password");

  const nav = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeLogin}
            textAlign="center"
            allowFontScaling
            placeholder="Login"
            placeholderTextColor="#CCCCCA"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="#CCCCCA"
          />
          <Button
            title="Sign Up"
            onPress={() => {
              nav.replace("Login");
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
  },
});

export default Registration;
