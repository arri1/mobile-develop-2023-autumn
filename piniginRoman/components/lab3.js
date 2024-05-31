import React, { useState, useMemo } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const lab3 = () => {
  const [number, setNumber] = useState('');

  // Используем useMemo для кеширования результата
  const evenOrOdd = useMemo(() => {
    return number % 2 === 0 ? 'Четное' : 'Нечетное';
  }, [number]);

  return (
    <View style={styles.container}>
      <Text>Введите число:</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setNumber(parseInt(text))}
        value={number}
        keyboardType="numeric"
      />
      {number !== '' && (
        <Text>{evenOrOdd}</Text>
      )}
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    width: 200,
  },
});

export default lab3;
