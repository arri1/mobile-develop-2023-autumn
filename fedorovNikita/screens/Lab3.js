import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import React, { useState, useEffect, useMemo } from "react";

const Lab3 = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setTime(time + 1), 1000);
    return () => clearInterval(interval)
  }, [time]);

  const squaredValue = useMemo(() => {
    return count * count;
  }, [count]);

  return (
    <View style={styles.container}>
      <Text>Runtime: {time} </Text>
      <View style={styles.space}></View>
      <View style={styles.count}>
        <Text>Count: {count}</Text>
        <View style={styles.space}></View>
        <Text>Squared Value: {squaredValue}</Text>
      </View>
      <Button title="Increment Count" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
  },
  count: {
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center'
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Lab3;