import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Login from "../screens/Login";
import Registration from "../screens/Registration";
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
