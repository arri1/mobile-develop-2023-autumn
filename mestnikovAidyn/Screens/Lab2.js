
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect} from "react";
import Button from "../components/Button";



export default function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{calculation}</Text>
      <Button
          title="Calc"
          onPress={() => {
            setCount((c) => c + 1);
          }}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: 'white',
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
