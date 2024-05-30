import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 70, margin: 30 }}>{count}</Text>

      <View style={styles.btnContainer}>
        <Button onPress={() => setCount(count + 1)} title="+1" color="white" />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => setCount(count - 1)} title="-1" color="white" />
      </View>
      <View style={styles.btnContainer}>
        <Button onPress={() => setCount(0)} title="Restart" color="white" />
      </View>
      <StatusBar style="auto" />
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
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 8,
    borderRadius: 30,
    marginBottom: 10,
    width: 200,
    justifyContent: 'center',
  },
});
