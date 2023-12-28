import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
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
            placeholderTextColor="grey"
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangePass}
            textAlign="center"
            allowFontScaling
            placeholder="Password"
            placeholderTextColor="grey"
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
    marginBottom: 0,
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
    height: 42,
    marginTop: 0,
    marginBottom: 18,
    borderWidth: 0,
    padding: 18,
    backgroundColor: "#F7F6F1",
    borderRadius: 25,
    fontSize: 18,
  },
});

export default Registration;
