import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import { updateEmail } from "firebase/auth";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
const ChangeEmail = () => {
  const [email1, setEmail1] = useState("");
  const [email2, setEmail2] = useState("");

  const { user } = useAuth();

  const handleSubmit = async () => {
    if (email1 && email2 && email1 == email2) {
      try {
        updateEmail(user, email1);
        nav.push("Settings");
        console.log(email1);
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
            onChangeText={(text) => setEmail1(text)}
            textAlign="center"
            allowFontScaling
            placeholder="New Email"
            placeholderTextColor="white"
            backgroundColor="cyan"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail2(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Repeat Email"
            placeholderTextColor="white"
            backgroundColor="cyan"
          />
        </View>
        <Button title="Change Email" onPress={handleSubmit} />
        <Button title="Back" onPress={() => nav.push("Settings")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  buttoncontainer: {
    marginBottom: 10,
  },
  input: {
    height: 52,
    marginTop: 10,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "white ",
    borderRadius: 25,
    fontSize: 18,
  },
});
export default ChangeEmail;
