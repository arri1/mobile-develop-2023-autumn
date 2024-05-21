/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

function SignOutScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: 'SET_AUTHENTICATED', payload: false });
        navigation.replace('AuthStack');
      })
      .catch(() => {});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.calculateButton]}
        onPress={handleSignOut}
      >
        <Text style={styles.buttonText}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SignOutScreen;
