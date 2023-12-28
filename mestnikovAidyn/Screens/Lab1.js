import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";


export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <TouchableOpacity style={styles.button}
        onPress={() => {
          setNumber(number * 2)
        }}>
        <Text style={styles.text}>x2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
          onPress={() => {
            setNumber(number / 2);
          }}>
        <Text style={styles.text}>/2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "end",
    alignItems: "center",
    flex: 1,
    backgroundColor: '#696969',
    gap: 10,
  },
  text: {
    color: "cyan", 
    fontSize: 24,
  },
  button: {
    height: 50,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
