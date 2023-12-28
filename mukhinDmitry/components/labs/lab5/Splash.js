import { View } from 'react-native'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
  const nav = useNavigation()
  useEffect(() => {
    if (true) {
      nav.replace('Intro')
    }
  })
  return <View></View>
}

export default Splash
