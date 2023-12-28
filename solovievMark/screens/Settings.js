import { View, StyleSheet, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";

const Settings = () => {
  const nav = useNavigation();
  const auth = getAuth();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View style={styles.colorcontainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            signOut(auth)
              .then(() => {})
              .catch((err) => {
                console.log("Error:", err.message);
              });

            nav.replace("Login");
          }}
        >
          <Text style={styles.text}>Logout</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            nav.replace("ChangePassword");
          }}
        >
          <Text style={styles.text}>Change Password</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            nav.replace("ChangeEmail");
          }}
        >
          <Text style={styles.text}>Change Email</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
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
  colorcontainer: {
    width: 320,
    height: 320,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
});

export default Settings;
