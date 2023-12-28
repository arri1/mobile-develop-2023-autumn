import { StyleSheet, Text, View } from "react-native";
import Button from "../components/Button";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { auth } from "../firebase";

const Lab4 = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Button
        onPress={handleLogout}
        title={"Logout"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
  },
});

export default Lab4;