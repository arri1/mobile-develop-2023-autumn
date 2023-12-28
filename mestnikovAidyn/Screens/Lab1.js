
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";
import Button from "../components/Button";



export default function App() {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{number}</Text>
      <Button
        title="x2"
        onPress={() => {
          setNumber(number * 2)
        }}>
      </Button>
      <Button 
          title="/2"
          onPress={() => {
            setNumber(number / 2);
          }}>
        <Text style={styles.text}>/2</Text>
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
