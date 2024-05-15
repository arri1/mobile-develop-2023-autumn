import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const Lab1 = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Button onPress={decrementCount} title="-1" />
      <Text style={styles.count}>{count}</Text>
      <Button onPress={incrementCount} title="+1" />
    </View>
  );
};

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
});

export default Lab1;
