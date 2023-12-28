import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {gql, useMutation } from "@apollo/client";


const CHANGE_LOGIN = gql`
    mutation EditUser($name:String!){
        editProfile(newName:$name)
    }
`;


const Settings = () => {
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const [editMutation] = useMutation(CHANGE_LOGIN);

  const logoutHandler =  () => {
    if (!name){
        alert("Логин пустой")
        return
    };

    const { data } =  editMutation({
        variables: {
            name: name,
        },
    });

    navigation.goBack();
  };
  

  return (
    <View style={styles.container}>
        <View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Settings</Text>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Text style={styles.back}>Back</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.text}>Change login</Text>
            <TextInput
                placeholder="Enter new login"
                placeholderTextColor={"#CCCCCC"}
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={logoutHandler}>
                <Text style={styles.textButton}>
                Accept
                </Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3C5F',
    alignItems: 'center',
  },
  containerTitle:{
    marginTop: 107,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    color: "#F3F4F6",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  back:{
    color: "#F3F4F6",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
    textDecorationLine: 'underline',
  },
  text:{
    color: "white",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 78
  },
  input: {
    backgroundColor: "#2F3C5F",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 13,
    borderColor: "#B8B8B8",
    borderWidth: 2,
    color: "#CCCCCC",
    width: 270,
    height: 46
  },
  button: {
    backgroundColor: "#EFF0F6", 
    height: 38,
    width: 270,
    borderRadius: 41,
    justifyContent: 'center',
    marginTop:67
  },
  textButton: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    color: "#343333",
  },
});


export default Settings;