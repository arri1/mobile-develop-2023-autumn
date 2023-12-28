import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import TabNavigator from "./tabNavigator";

const Stack = createNativeStackNavigator();

export default function MainStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}
