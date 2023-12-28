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
import { REG } from '../../../sql/mutations/RegisterMutation'
import { AUTH } from '../../../sql/mutations/LoginMutation'
import { useNavigation } from "@react-navigation/native"
import { setLoginValue } from '../lab4/Slice'

const KzrRegistration = () => {
  const nav = useNavigation()
  const dispatch = useDispatch()
  const [login, setLogin] = useState(null)
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)

  const [reg, { loading }] = useMutation(REG, {
    onCompleted: async () => {
      console.log('Register completed')
      onAuth()
    },
    onError: ({ message }) => {
      console.log(message)
      if (
        message ===
        'GraphQL error: Unique constraint failed on the fields: (`login`)'
      ) {
        console.log('This login already exists')
        return null
      }
      console.log('Registration error')
    },
  })
  const [auth, { logLoading }] = useMutation(AUTH, {
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
    console.log('data correct')
    return true
  }
  if (loading) return <ActivityIndicator color="#82D2FF" style={styles.kzrMain} />
  if (logLoading) return <ActivityIndicator color="#82D2FF" style={styles.kzrMain} />

  const createUser = () => {
    console.log('createUser')
    if (isDataCorrect())
      reg({
        variables: {
          data: {
            password,
            login,
            name,
          },
        },
      })
  }

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
    nav.replace('Tab')
  }

  return (
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
        <TextInput
          style={styles.kzrInput}
          onChangeText={(text) => setName(text)}
          value={name}
          placeholder="Name"
        />
        <Pressable
          onPress={() => {
            createUser()
          }}
          style={styles.kzrButton}
        >
          <Text style={styles.kzrButtonText}>Register</Text>
        </Pressable>
      </View>
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

export default KzrRegistration
