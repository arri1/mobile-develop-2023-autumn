import { SafeAreaView, StyleSheet, Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Intro = () => {
  const nav = useNavigation()
  return (
    <SafeAreaView style={styles.kzrMain}>
		<Pressable
            onPress={() => {
				nav.push('Registration')
            }}
            style={styles.kzrButton}
          >
            <Text style={styles.kzrButtonText}>Sign Up</Text>
          </Pressable>
		  <Pressable
            onPress={() => {
				nav.push('Login')
            }}
            style={styles.kzrButton}
          >
            <Text style={styles.kzrButtonText}>Login</Text>
          </Pressable>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
	kzrMain: {
		backgroundColor: '#333333',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	  },
	  kzrButton: {
		marginTop: 15,
		height: 46.54,
		width: 282.54,
		borderRadius: 8.72,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#5E5E5E',
	  },
	  kzrButtonText: {
		lineHeight: 34.91,
		height: 34.91,
		color: '#FFFFFF',
		fontSize: 16,
	  }
})

export default Intro
