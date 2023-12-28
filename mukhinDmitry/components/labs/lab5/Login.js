import React, { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useMutation } from '@apollo/client'
import { setLoginValue } from '../lab4/Slice'
import { AUTH } from '../../../sql/mutations/LoginMutation'
import { useNavigation } from "@react-navigation/native"

const KzrLogin = () => {
  const nav = useNavigation()
  const dispatch = useDispatch()
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)

  const [auth, { loading }] = useMutation(AUTH, {
    onCompleted: async ({ authUser }) => {
      await AsyncStorage.setItem('token', authUser.token)
      nav.replace('Tab')
      console.log('Login succeded')
    },
    onError: ({ message }) => {
      console.log(message)
      if (message === 'GraphQL error: Incorrect password') {
        console.log('Incorrect password')
        return null
      }
      console.log('Something went wrong')
    },
  })

  const isDataCorrect = () => {
    if (login === '') {
      console.log('Null login')
      return false
    }
    if (password === '') {
      console.log('Null password')
      return false
    }
    return true
  }

  if (loading)
    return (
      <SafeAreaView style={styles.kzrMain}>
        <ActivityIndicator color="#82D2FF" backgroundColor="#333333" />
      </SafeAreaView>
    )

  const onAuth = () => {
    dispatch(setLoginValue(login))
    if (isDataCorrect())
      auth({
        variables: {
          data: {
            login,
            password,
          },
        },
      })
  }

  return (
    <SafeAreaView style={styles.kzrMain}>
      <SafeAreaView style={styles.kzrMain}>
        <View style={styles.kzrCenter}>
          <TextInput
            style={styles.kzrInput}
            onChangeText={(text) => setLogin(text)}
            value={login}
            placeholder="Login"
          />
          <TextInput
            style={styles.kzrInput}
            onChangeText={(text) => setPassword(text)}
            value={password}
            placeholder="Password"
          />
          <Pressable
            onPress={() => {
              onAuth()
            }}
            style={styles.kzrButton}
          >
            <Text style={styles.kzrButtonText}>Login</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  kzrCenter: {
    alignItems: 'center',
  },
  kzrButton: {
    marginTop: 54.9,
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
  },
  kzrInput: {
    height: 46.54,
    width: 369.45,
    borderRadius: 8.72,
    marginTop: 11.63,
    padding: 5.81,
    paddingLeft: 11.63,
    lineHeight: 34.91,
    backgroundColor: '#5E5E5E',
    color: '#FFFFFF',
    fontSize: 16,
  },
  kzrMain: {
    backgroundColor: '#333333',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default KzrLogin
