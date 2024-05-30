import { StyleSheet, TouchableOpacity, View, Button, Text } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { auth } from '../../firebase';

export default function ProfilePage() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut} style={styles.btnContainer}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 30,
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
