import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.colorcontainer}>
        <View style={styles.buttoncontainer}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail1(text)}
            textAlign="center"
            allowFontScaling
            placeholder="New Email"
            placeholderTextColor="#CCCCCA"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail2(text)}
            textAlign="center"
            allowFontScaling
            placeholder="Repeat Email"
            placeholderTextColor="#CCCCCA"
          />
          <Button title="Change Email" onPress={handleSubmit} />
          <Button title="Back" onPress={() => nav.push("Settings")} />
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
    
  },
});
export default ChangeEmail;