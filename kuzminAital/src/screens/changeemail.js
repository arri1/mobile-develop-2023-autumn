import { useState } from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function ChangeEmail() {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const user = auth.currentUser;

  const nav = useNavigation();

  const handleSubmit = () => {
    Alert.alert(
        "Подтвердите смену пароля",
        "Вы действительно хотите поменять пароль?",
        [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "Confirm",
                onPress: async () => {
                    try {
                        if (password1) {
                            await updatePassword(user, password1);
                            nav.push("Tab", { screen: "logout" });
                        }
                    } catch (err) {
                        console.log("Error:", err.message);
                    }
                },
            },
        ]
    );
};
 
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="New Password"
          secureTextEntry
          value={password1}
          onChangeText={(text) => {
            setPassword1(text);
          }}
          style={styles.textInput}
        />
        <TouchableOpacity
          title="Change Password"
          onPress={handleSubmit}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="Back"
          onPress={() => nav.push("Tab", { screen: "Profile" })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },
  textInput: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "blue",
    width: "100%",
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
