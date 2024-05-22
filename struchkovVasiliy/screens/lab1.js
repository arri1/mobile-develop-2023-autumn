/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function Lab1() {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.calculateButton]}
        onPress={decrementCount}
      >
        <Text style={styles.buttonText}>-1</Text>
      </TouchableOpacity>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity
        style={[styles.button, styles.calculateButton]}
        onPress={incrementCount}
      >
        <Text style={styles.buttonText}>+1</Text>
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
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 52,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default Lab1;
