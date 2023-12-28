import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const FibonacciComponent = () => {
  const [number, setNumber] = useState(1);

  const fibNumber = useMemo(() => fibonacci(number), [number]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вычисление числа Фибоначчи с useMemo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={number.toString()}
          onChangeText={(text) => setNumber(Number(text))}
        />
        <Button title="Вычислить" onPress={() => {}} />
      </View>
      <Text style={styles.result}>
        Число Фибоначчи для {number} равно: {fibNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 10,
    flex: 1
  },
  result: {
    fontSize: 16
  }
});

export default FibonacciComponent;
