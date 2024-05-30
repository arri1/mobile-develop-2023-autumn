import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Lab1 = ({navigation}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Обновляем заголовок при изменении счетчика
    // В React Native мы можем использовать функцию заголовка навигации, если используем React Navigation
    // Например:
    // navigation.setOptions({ title: Count: ${count} });
  }, [count]); // useEffect будет запускаться только при изменении count

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <View style={styles.container}>
      <Text>Счетчик</Text>
      <Text >Счет: {count}</Text>
      <Button title="Плюс 1" onPress={increment} />
      <Button title="Минус 1" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    }
  });

export default Lab1;
