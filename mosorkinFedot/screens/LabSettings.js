import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/core";

const LabSettings = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Выйти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD66D5",
    alignItems: "center",
    justifyContent: "center",
  },
  textEmail: {},
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#FFD300",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LabSettings;
