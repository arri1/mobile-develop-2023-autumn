import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import store from '../store';

const Lab5 = () => {
  const count = useSelector((state) => state.counter);

  return (
    <View style={styles.container}>
      <Text>{ count }</Text>
      <View style={styles.space}></View>
      <Button
          onPress={() => {
          store.dispatch({ type: 'INCREMENT' });
          }}
          title={"Increment"}
      />
      <View style={styles.space}></View>
      <Button
          onPress={() => {
          store.dispatch({ type: 'DECREMENT' });
          }}
          title={"Decrement"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ecf0f1',
    },
    buttons: {
        justifyContent: 'center',
        alignItems: "center",
        flexDirection:'row',
    },
    space: {
        width: 20,
        height: 20,
    },
});

export default Lab5;