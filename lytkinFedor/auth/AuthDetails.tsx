import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Button, Text, View } from "react-native";

const AuthDetails = () => {
  const [authUser, setAuthUset] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUset(user);
      } else {
        setAuthUset(null);
      }
    });
    return () => {
      listen();
    };
  }, []);
  function userSignOut() {
    signOut(auth)
      .then(() => console.log("success"))
      .catch((e) => console.log(e));
  }
  return (
    <View>
      {authUser ? (
        <View>
          <Text>{`Signed in as ${authUser.email}`}</Text>
          <Button onPress={userSignOut} title={"Sign out"} />
        </View>
      ) : (
        <Text>Signed Out</Text>
      )}
    </View>
  );
};

export default AuthDetails;
