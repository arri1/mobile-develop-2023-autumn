import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import 'firebase/auth';

// Конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCFIoDUKOk4dslCPPlsyU2nr3ohMmkRB30",
    authDomain: "lab4-7f079.firebaseapp.com",
    projectId: "lab4-7f079",
    storageBucket: "lab4-7f079.appspot.com",
    messagingSenderId: "173247269948",
    appId: "1:173247269948:web:da7d35460a3f9d1fea4739",
    measurementId: "G-BWHVXSEDHG"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Обработка успешной регистрации
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Обработка успешного входа
      navigation.navigate("Lab3");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Введите email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Введите пароль"
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Зарегистрироваться" onPress={handleSignUp} />
      <Button title="Войти" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AuthComponent;
