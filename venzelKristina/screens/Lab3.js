import {useMemo, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/Button';

const expensiveFunction = () => {
  let i = 0;
  while (i < 10000000) i++;
  return i;
};

const Lab3 = () => {
  const [memoNum, setMemoNum] = useState(0);
  const [num, setNum] = useState(0);
  const memoizeExpensiveFunction = useMemo(
    () => expensiveFunction('fromUseMemo'),
    [],
  );
  const memoIterate = () => {
    setMemoNum(memoizeExpensiveFunction);
  };
  const iterate = () => {
    setNum(expensiveFunction('iterate without memo'));
  };
  const resetState = () => {
    setNum(0);
    setMemoNum(0);
  };
  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>
          Результат вычисления с usememo: {memoNum}
        </Text>
        <Button title={'Вычислить с Memo'} onPress={memoIterate} />
        <Text style={styles.text}>Результат вычисления без usememo: {num}</Text>
        <Button title={'Вычислить без Memo'} onPress={iterate} />
        <Button title={'Обнулить'} onPress={resetState} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    gap: 10,
    backgroundColor: 'rgb(25, 28, 41)',
  },
  text: {
    textAlign: 'center',
    verticalAlign: 'middle',
    marginTop: 30,
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    marginHorizontal: 10,
  },
  whitecontainer: {
    display: 'flex',
    marginTop: 10,
    width: 220,
    height: 268,
    alignItems: 'center',
    backgroundColor: 'rgb(48, 46, 60)',
    borderRadius: 20,
  },
});
export default Lab3;
