import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useEffect, useState } from 'react';

import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Home', { screen: 'HomePage' });
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with: ' + user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Logged in with: ' + user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.name}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Autorisation</Text>
      </View>
      <View style={styles.container1}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.btnContainer}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={styles.btnContainer1}>
          <Text style={styles.buttonText1}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  name: {
    flex: 0,
    backgroundColor: 'white',
    margin: 0,
    paddingTop: 65,
    paddingBottom: 15,
    fontSize: 32,
    width: 500,
    maxHeight: 150,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 220,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 11,
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 30,
    fontSize: 16,
    width: 280,
  },
  btnContainer: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 30,
    width: 180,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer1: {
    marginTop: 15,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 5,
    borderRadius: 30,
    width: 180,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  buttonText1: {
    color: 'black',
    fontSize: 18,
  },
});
