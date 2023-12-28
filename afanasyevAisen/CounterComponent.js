import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const CounterComponent = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Счет: {count}</Text>
      <Button title="Увеличить" onPress={() => dispatch({ type: 'increment' })} />
      <Button title="Уменьшить" onPress={() => dispatch({ type: 'decrement' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10
  }
});

export default CounterComponent;
