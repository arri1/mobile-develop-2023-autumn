import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
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
            onChangeText={(text) => setPassword1(text)}
            textAlign="center"
            allowFontScaling
            placeholder="New Password"
            placeholderTextColor="white"
            backgroundColor="cyan"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPassword2(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Repeat Password"
            placeholderTextColor="white"
            backgroundColor="cyan"
          />
        </View>
        <Button title="ChangePwd" onPress={handleSubmit} />
        <Button title="Back" onPress={() => nav.push("Settings")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer: {
    marginBottom: 10,
    gap: 0,
  },

  input: {
    height: 50,
    marginTop: 10,
    borderWidth: 0,
    padding: 0,
    backgroundColor: "#F7F6F1",
    borderRadius: 16,
    fontSize: 18,
  },
});
export default ChangePassword;
