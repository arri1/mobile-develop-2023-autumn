import React, { useState, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FibonacciCalculator = () => {
  const [n, setN] = useState(0);
  
  // Мемоизированная функция для вычисления числа Фибоначчи
  const calculateFibonacci = useMemo(() => {
    const fibonacci = (num) => {
      if (num <= 1) return num;
      return fibonacci(num - 1) + fibonacci(num - 2);
    };
    return fibonacci;
  }, []); // Пустой массив зависимостей, чтобы функция не пересчитывалась при каждом рендере

  const handleCalculate = () => {
    if (n >= 0) {
      const result = calculateFibonacci(n);
      alert(`Fibonacci(${n}) = ${result}`);
    } else {
      alert('Пожалуйста, введите неотрицательное число');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Введите число N для вычисления Fibonacci(N):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(n)}
        onChangeText={(text) => setN(Math.max(0, parseInt(text) || 0))}
      />
      <Button title="Вычислить" onPress={handleCalculate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
  },
});

export default FibonacciCalculator;