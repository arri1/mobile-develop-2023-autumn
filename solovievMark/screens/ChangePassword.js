import { Button, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";
import useAuth from "../authComponents/useAuth";
import { updatePassword } from "firebase/auth";

const ChangePassword = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const { user } = useAuth();

  const handleSubmit = async () => {
    if (password1 && password2 && password1 == password2) {
      try {
        updatePassword(user, password1);
        nav.push("Settings");
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
            onChangeText={(text) => setPassword1(text)}
            textAlign="center"
            allowFontScaling
            placeholder="New Password"
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            onChangeText={(text) => setPassword2(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Repeat Password"
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.text}>ChangePassword</Text>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => {
              nav.push("Settings");
            }}
          >
            <Text style={styles.text}>Back</Text>
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
export default ChangePassword;
