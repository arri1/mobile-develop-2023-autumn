import React from "react";
import { View, Text } from "react-native";
import DisplayUsers from "./Query";
import PassUsers from "./Mutations";

const Lab4Auth = () => {
  return (
    <View>
      <View>
        <Text>First Mutation Screen</Text>
        <PassUsers />
      </View>
      <View>
        <Text>First Display Screen</Text>
        <DisplayUsers />
      </View>
    </View>
  );
};
export default Lab4Auth;
