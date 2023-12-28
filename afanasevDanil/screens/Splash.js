import React from "react";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const nav = useNavigation();
  useEffect(() => {
    if (true) {
      nav.replace("Login");
    }
  });
  return (
    <View>
      <Text>SomeApp</Text>
    </View>
  );
};

export default Splash;
