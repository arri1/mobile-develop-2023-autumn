import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './screens/LoginPage';
import MainContainer from './MainContainer';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Home" component={MainContainer} />
    </Stack.Navigator>
  );
}
