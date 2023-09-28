import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  
  const [displayText, setDisplayText] = useState('Hello');

  const changeText = () => {
    if (displayText === 'Hello') {
      setDisplayText('world!');
    } else {
      setDisplayText('Hello');
    }
  };
  
  return (
    <View style={styles.container}>
      <Text>{displayText}</Text>
      <Button title='Press' onPress={changeText}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
