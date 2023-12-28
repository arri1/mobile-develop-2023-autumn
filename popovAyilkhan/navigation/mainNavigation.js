import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./tabNavigation";
import Login from "../screens/login"
import Registration from "../screens/registration";
import Settings  from "../screens/settings";
import Lab4 from "../screens/lab4";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    );
  };
  
  export default MainNavigation;