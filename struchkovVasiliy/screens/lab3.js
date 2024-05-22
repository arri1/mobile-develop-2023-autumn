/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Lab3() {
  const [number, setNumber] = useState(1);
  const [factorialWithoutMemo, setFactorialWithoutMemo] = useState(1);
  const [factorialWithMemo, setFactorialWithMemo] = useState(1);

  const calculateFactorial = useCallback((n) =>
    n <= 1 ? 1 : n * calculateFactorial(n - 1)
  );

  const handleCalculateWithoutMemo = () => {
    const result = calculateFactorial(number);
    setFactorialWithoutMemo(result);
  };

  const memoizedFactorial = useMemo(
    () => calculateFactorial(number),
    [calculateFactorial, number]
  );

  const handleCalculateWithMemo = () => {
    setFactorialWithMemo(memoizedFactorial);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите число от 0-40:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(number)}
        onChangeText={(text) => {
          if (text === '') {
            setNumber(' ');
          } else {
            const num = parseInt(text, 10);
            if (!isNaN(num) && num >= 0 && num <= 40) {
              setNumber(num);
            }
          }
        }}
      />
      <TouchableOpacity
        style={[styles.button, styles.calculateButton]}
        onPress={handleCalculateWithoutMemo}
      >
        <Text style={styles.buttonText}>Вычислить без Memo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.calculateButton]}
        onPress={handleCalculateWithMemo}
      >
        <Text style={styles.buttonText}>Вычислить с Memo</Text>
      </TouchableOpacity>
      <Text style={styles.resultText}>
        Факториал без useMemo: {factorialWithoutMemo}
      </Text>
      <Text style={styles.resultText}>
        Факториал с useMemo: {factorialWithMemo}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
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
  calculateButton: {
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultText: {
    marginTop: 10,
  },
});

export default Lab3;
