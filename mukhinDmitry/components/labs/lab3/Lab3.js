import { useMemo, useCallback, useState } from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import RoundedButton from '../../common/buttons/RoundedButton'

const expensiveFunction = (kzrTimerName) => {
  let i = 0
  while (i < 20000000) i++
  return i
}

const KzrLab3 = () => {
  const [num, setNum] = useState(0)
  const [memoNum, setMemoNum] = useState(0)
  const [callbackNum, setCallbackNum] = useState(0)

  const memoizeExpensiveFunction = useMemo(
    () => expensiveFunction('fromUseMemo'),
    [],
  )

  const memoIterate = () => {
    setMemoNum(memoizeExpensiveFunction)
  }
  const iterate = () => {
    setNum(expensiveFunction('iterate without memo'))
  }
  const memoizedCallback = useCallback(() => {
    setCallbackNum(callbackNum + 1)
  }, [callbackNum])

  const resetState = () => {
    setNum(0)
    setMemoNum(0)
    setCallbackNum(0)
  }

  return (
    <SafeAreaView style={styles.kzrSafeArea}>
      <Text style={styles.kzrItemText}>number with memo: {memoNum}</Text>
      <Text style={styles.kzrItemText}>number without memo: {num}</Text>
      <Text style={styles.kzrItemText}>
        number from callback: {callbackNum}
      </Text>
      <RoundedButton onPress={memoIterate} title="expensiveFunc with memo" />
      <RoundedButton onPress={iterate} title="expensiveFunc without memo" />
      <RoundedButton
        onPress={memoizedCallback}
        title="counter using useCallback"
      />
      <RoundedButton onPress={resetState} title="reset" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  kzrSafeArea: {
    backgroundColor: '#333333',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  kzrItemText: {
    lineHeight: 34.91,
    height: 34.91,
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 16,
  },
})

export default KzrLab3
