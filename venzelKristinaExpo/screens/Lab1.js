import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import Button from '../components/Button.js';

export default function Lab1() {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={'+ 1'}
      />
      <Button
        onPress={() => {
          setCount(count - 1);
        }}
        title={'- 1'}
      />
      <Button
        onPress={() => {
          setCount(count * 2);
        }}
        title={'* 2'}
      />
      <Button
        onPress={() => {
          setCount(count / 2);
        }}
        title={'/ 2'}
      />
      <Button
        onPress={() => {
          setCount(count * 0);
        }}
        title={'Reset'}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  button: {
    height: 40,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: 'red',
  },
});
