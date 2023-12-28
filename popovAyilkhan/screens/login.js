import React, { useState } from "react";
import {gql, useMutation} from "@apollo/client";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from '@react-native-async-storage/async-storage'


const LOGIN_MUTATION = gql`
  mutation Logins ($email: String!, $password: String!) {
    login (email: $email, password:$password)
  }
`;



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const [loginMutation] = useMutation(LOGIN_MUTATION);

  const loginHandler = async () => {
    if (!email || !password) {
      console.error("Email and password are required");
      return;
    }

    const { data } = await loginMutation({
      variables: {
        email: email.toLowerCase(),
        password: password,
      },
    });

    console.log(data)

    if (data && data.login) {
      await AsyncStorage.setItem('token', data.login);
      navigation.replace('Tab');
      console.log('Login succeeded');
    }
  }
  
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.mainContainer}>
        <View style={styles.viewLink}>
            <Text style={styles.linkSignIn}>Sign In</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
              <Text style={styles.linkSignUp}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.titleInput}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"#CCCCCC"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.titleInput}>Password</Text>
          <TextInput
            placeholder="Enter yuor password"
            placeholderTextColor={"#CCCCCC"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={loginHandler} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.containerText}>
          <Text style={styles.outText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
  
export default Login;
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F3C5F",
  },
  mainContainer:{
    flex: 1
  },
  inputContainer:{
    marginTop: 87
  },
  input: {
    backgroundColor: "#2F3C5F",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 8,
    borderColor: "#B8B8B8",
    borderWidth: 2,
    color: "#CCCCCC",
    width: 270,
    height: 46
  },
  titleInput:{
    color:"white",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    marginTop: 31,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#EFF0F6",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 41,
    alignItems: "center",
    width: 270,
    height: 38,
    marginTop: 71
  },
  buttonText: {
    color: "#343333",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700"
  },
  outText: {
    marginTop: 22,
    color: "white",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "700"
  },
  linkText: {
    marginTop: 22,
    color: "white",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: "700",
    textDecorationLine: 'underline',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewLink:{
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  linkSignIn: {
    color: "#F3F4F6",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
    textDecorationLine: "underline"
  },
  linkSignUp:{
    color: "#A1ACC2",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  }
});