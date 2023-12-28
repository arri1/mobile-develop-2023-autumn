import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './TabNavigation'
import Splash from '../labs/lab5/Splash'
import Intro from '../labs/lab5/Intro'
import Login from '../labs/lab5/Login'
import Registration from '../labs/lab5/Registration'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  )
}

export default MainStackNavigator
