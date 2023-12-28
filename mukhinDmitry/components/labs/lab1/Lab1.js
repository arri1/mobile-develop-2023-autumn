import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import RoundedButton from '../../common/buttons/RoundedButton'
import { randomize } from '../lab4/Slice'

const KzrLab1 = () => {
  const bgColor = useSelector((state) => state.KzrSlice.value)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={styles.kzrSafeArea}>
      <View style={[styles.kzrBox, { backgroundColor: bgColor }]}></View>
      <RoundedButton
        style={styles.kzrButton}
        onPress={() => {
          dispatch(randomize())
        }}
        title="Try me"
      />
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
  kzrButton: {
    marginTop: 64,
    paddingHorizontal: 24,
  },
  kzrTitle: {
    color: '#FFFFFF',
    marginTop: 32,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  kzrBox: {
    height: 100,
    margin: 50,
  },
})

export default KzrLab1
