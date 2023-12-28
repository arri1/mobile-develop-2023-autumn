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


const CREATE_USER = gql`
  mutation CreateUser($name:String!, $email:String!, $password:String!){
    register(name:$name, email:$email, password:$password)
  }
`;


const Registration = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUser] = useMutation(CREATE_USER);

  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (!login) {
      alert("Логин пустой");
      return;
    } else if (!email) {
      alert("Почта не указана");
      return;
    } else if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }

    const { data } = await createUser({
      variables: {
        name: login,
        email: email.toLowerCase(),
        password: password,
      },
    });

    console.log("Input", data);

    if (data && data.register) {
      await AsyncStorage.setItem('token', data.register);
      navigation.replace('Tab');
      console.log('Token save');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <View style={styles.viewLink}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkSignIn}>Sign In</Text>
          </TouchableOpacity>
            <Text style={styles.linkSignUp}>Sign Up</Text>
        </View>
        <View style={styles.inputView}>
          <Text style={styles.inputTitle}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor={"#CCCCCC"}
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.inputTitle}>Login</Text>
          <TextInput
            placeholder="Enter your login"
            placeholderTextColor={"#CCCCCC"}
            value={login}
            onChangeText={(text) => setLogin(text)}
            style={styles.input}
          />
          <Text style={styles.inputTitle}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"#CCCCCC"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          <Text style={styles.inputTitle}>Confirm password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor={"#CCCCCC"}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
      

      
        <TouchableOpacity onPress={handleSignUp} style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={styles.outText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2F3C5F",
  },
  inputContainer: {
    flex: 1
  },
  inputView: {
    marginTop: 47
  },
  inputTitle:{
    color: "white",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#2F3C5F",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 12,
    marginTop: 12,
    marginBottom: 34,
    borderColor: "#B8B8B8",
    borderWidth: 2,
    color: "#CCCCCC",
    width: 270,
    height: 46
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#EFF0F6",
    width: "100%",
    paddingVertical: 10,
    borderRadius: 41,
    alignItems: "center",
    width: 270,
    height: 38,
    marginTop: 10
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
  viewLink:{
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25
  },
  linkSignIn: {
    color: "#A1ACC2",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  linkSignUp:{
    color: "#F3F4F6",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
    textDecorationLine: "underline"
  }
});