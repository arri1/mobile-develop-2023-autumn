import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useQuery, gql } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
if (__DEV__) {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
const GET_USERS = gql`
  query {
    getAllUsers {
      id
      name
      login
      pass
    }
  }
`;

const DisplayUsers = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return (
    <View>
      {data.getAllUsers.map((users) => (
        <View key={users.id}>
          <Text>{users.name}</Text>
          <Text>{users.login}</Text>
        </View>
        //ITS WORKINGG!!!
      ))}
      <Button
        title="Refresh"
        onPress={() => {
          GET_USERS;
          console.log(data);
        }}
      />
    </View>
  );
};
export default DisplayUsers;
