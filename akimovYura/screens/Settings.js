import { View, StyleSheet } from "react-native";
import Button from "../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
//изменение пароля логина
const Settings = () => {
  const nav = useNavigation();
  const auth = getAuth();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <View style={styles.whitecontainer}>
        <Button
          title={"Logout"}
          onPress={() => {
            signOut(auth)
              .then(() => {
                // Sign-out successful.
              })
              .catch((err) => {
                console.log("Error:", err.message);
              });

            nav.replace("Login");
          }}
        />
        <Button
          title={"Change Password"}
          onPress={() => {
            nav.replace("ChangePassword");
          }}
        />
        <Button
          title={"Change Email"}
          onPress={() => {
            nav.replace("ChangeEmail");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  whitecontainer: {
    width: 316,
    height: 524,
    margin: 22,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 25,
  },
});
export default Settings;