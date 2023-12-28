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
import { useMutation } from '@apollo/client'
import { useSelector, useDispatch } from 'react-redux'
import { setLoginValue } from '../lab4/Slice'
import { UPDATE_USER } from '../../../sql/mutations/UpdateMutation'

const KzrUpdate = () => {
  const dispatch = useDispatch()
  const [login, setLogin] = useState(
    useSelector((state) => state.KzrSlice.login),
  )
  const [password, setPassword] = useState(null)
  const [name, setName] = useState(null)
  const [group, setGroup] = useState(null)

  const [updt, { loading }] = useMutation(UPDATE_USER, {
    onCompleted: async () => {
      console.log('Update succeded')
    },
    onError: ({ message }) => {
      console.log(message)
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

  const onUpdate = () => {
    dispatch(setLoginValue(login))
    if (isDataCorrect())
      updt({
        variables: {
          data: {
            name: { set: name },
            group: { set: group },
            password: { set: password },
            // name,
            // group,
            // password
          },
        },
      })
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
        <TextInput
          style={styles.kzrInput}
          onChangeText={(text) => setGroup(text)}
          value={group}
          placeholder="Group"
        />
        <Pressable
          onPress={() => {
            onUpdate()
          }}
          style={styles.kzrButton}
        >
          <Text style={styles.kzrButtonText}>Update user</Text>
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

export default KzrUpdate
