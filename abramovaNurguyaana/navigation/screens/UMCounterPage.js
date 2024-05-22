import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UMCounterPage = () => {
  const [count1, setCounter1] = useState(0);
  const [count2, setCounter2] = useState(0);

  const updatedCount2 = useMemo(() => {
    if (count1 === 0) return 0;
    else if (count1 === 1) return 1;
    return count1 + count2;
  }, [count1, count2]);

  const incrementCount = () => {
    setCounter1(count1 + 1);
    setCounter2(updatedCount2);
  };

  const resetCounters = () => {
    setCounter1(0);
    setCounter2(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count1}</Text>
      <Text style={styles.text}>Memoized Value: {updatedCount2}</Text>
      <View style={styles.btnContainer}>
        <Button
          title="Increase counter"
          onPress={incrementCount}
          color="white"
        />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Restart" onPress={resetCounters} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  btnContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 6,
    borderRadius: 30,
    marginBottom: 10,
    width: 200,
    justifyContent: 'center',
  },
});

export default UMCounterPage;
