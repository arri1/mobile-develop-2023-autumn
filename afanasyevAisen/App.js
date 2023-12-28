import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={{ alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Счетчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Увеличить" onPress={increment} />
        <View style={styles.buttonSpacing} />
        <Button title="Уменьшить" onPress={decrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: 50
    },
    counterText: {
      fontSize: 24,
      marginBottom: 20
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    buttonSpacing: {
      width: 20
    }
  });
  
export default Counter;