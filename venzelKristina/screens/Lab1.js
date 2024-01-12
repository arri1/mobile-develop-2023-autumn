import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useState} from 'react';
import Button from '../components/Button';

export default function Lab1() {
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>{count}</Text>
        <Button
          onPress={() => {
            setCount(count + 10);
          }}
          title={'+ 10'}
        />
        <Button
          onPress={() => {
            setCount(count - 10);
          }}
          title={'- 10'}
        />
        <Button
          onPress={() => {
            setCount(count / 5);
          }}
          title={'/ 5'}
        />
        <Button
          onPress={() => {
            setCount(count * 5);
          }}
          title={'* 5'}
        />
        <Button
          onPress={() => {
            setCount(count * 0);
          }}
          title={'Reset'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
    backgroundColor: 'rgb(25, 28, 41)',
  },
  text: {
    marginTop: 30,
    marginBottom: 10,
    color: 'rgb(255, 255, 255)',
    fontSize: 32,
  },
  whitecontainer: {
    width: 220,
    height: 268,
    alignItems: 'center',
    backgroundColor: 'rgb(48, 46, 60)',
    borderRadius: 20,
  },
});
