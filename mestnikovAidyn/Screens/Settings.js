import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
const Settings = () => {
  const nav = useNavigation();
  const auth = getAuth();
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
      }}
    >
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
          title={"Change Pwd"}
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

});
export default Settings;
