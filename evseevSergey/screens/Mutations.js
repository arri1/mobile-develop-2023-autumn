import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { gql, useMutation } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { TextInput } from "react-native-gesture-handler";
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

//Define mutation
const CREATE_USER = gql`
  mutation {
    createUser {
      name
      login
      pass
    }
  }
`;

const PassUsers = () => {
  const [addUser, { data, loading, error }] = useMutation(CREATE_USER);
  const [name, setName] = useState();
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  if (loading) return <Text>Submitting...</Text>;
  if (error) return <Text>Submission error!</Text>;
  return (
    <View>
      <View>
        <TextInput
          style={{ backgroundColor: "white", width: "100%", padding: 6 }}
          value={name}
          onChangeText={(text) => setName(text)}
        ></TextInput>
        <TextInput
          style={{ backgroundColor: "white", width: "100%", padding: 6 }}
          value={login}
          onChangeText={(text) => setLogin(text)}
        ></TextInput>
        <TextInput
          style={{ backgroundColor: "white", width: "100%", padding: 6 }}
          value={pass}
          onChangeText={(text) => setPass(text)}
        ></TextInput>
      </View>
      <View>
        <Button
          title="Add User"
          onPress={() => {
            addUser({
              variables: {
                data: {
                  name,
                  login,
                  pass,
                },
              },
            });
          }}
        />
      </View>
    </View>
  );
};
export default PassUsers;
