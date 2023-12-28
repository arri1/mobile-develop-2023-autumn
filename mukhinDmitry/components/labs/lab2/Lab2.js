import { useEffect, useState } from 'react'
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import AddButton from '../../common/buttons/AddButton'
import CheckButton from '../../common/buttons/CheckButton'

const KzrLab2 = () => {
  const [data, setData] = useState([])

  const formatData = (data) => {
    data.forEach((element) => {
      let t = element.title + ''
      if (t.length > 40) {
        element.title = t.slice(0, 40)
      }
    })
    return data
  }
  const getData = async () => {
    fetch('https://jsonplaceholder.typicode.com/users/1/todos')
      .then((response) => response.json())
      .then((json) => {
        setData(formatData(json))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const addItem = () => {
    console.log('additem called')
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <SafeAreaView style={styles.kzrSafeArea}>
      <View style={styles.kzrScrollView}>
        <ScrollView>
          {data.map((item) => (
            <View style={styles.kzrItem} key={item.id}>
              <CheckButton />
              <View style={styles.kzrItemDecor} />
              <Text style={styles.kzrItemText}>c{item.title}</Text>
            </View>
          ))}
          <View style={styles.kzrBlankItem}></View>
        </ScrollView>
      </View>

      <AddButton aStyle={styles.kzrAddButton} onPress={addItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  kzrSafeArea: {
    backgroundColor: '#333333',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  kzrItem: {
    backgroundColor: '#5E5E5E',
    height: 46.54,
    width: 404.45,
    marginTop: 11.63,
    marginLeft: 11.63,
    borderRadius: 8.72,
    padding: 5.81,
    display: 'flex',
    flexDirection: 'row',
  },
  kzrItemDecor: {
    height: 34.91,
    width: 1.5,
    borderRadius: 0.75,
    marginLeft: 5.81,
    backgroundColor: '#FFFFFF',
  },
  kzrItemText: {
    lineHeight: 34.91,
    height: 34.91,
    marginLeft: 5.81,
    color: '#FFFFFF',
    fontSize: 16,
  },
  kzrBlankItem: {
    height: 116.36,
  },
  kzrAddButton: {
    position: 'absolute',
    right: 23.27,
    bottom: 23.27,
  },
})

export default KzrLab2
