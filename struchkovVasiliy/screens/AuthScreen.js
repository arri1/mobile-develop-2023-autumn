/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function AuthScreen() {
  const navigation = useNavigation();
  const isAuthenticated = useSelector((state) => state.auth.authenticated);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate('HomeTabs');
    }
  }, [isAuthenticated, navigation]);

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: 'SET_AUTHENTICATED', payload: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleSignUp = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#B5AE08',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#00952A',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AuthScreen;
