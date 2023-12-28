import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect} from "react";


export default function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{calculation}</Text>
      <TouchableOpacity style={styles.button}
          onPress={() => {
            setCount((c) => c + 1);
          }}>
        <Text style={styles.text}>Calc</Text>
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
