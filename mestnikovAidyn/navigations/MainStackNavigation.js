import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import Login from "../Screens/Login";
import Splash from "../Screens/Splash";
import Registration from "../Screens/Registration";
import useAuth from "../hooks/useAuth";
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  const { user } = useAuth();

  if (user) {
    headerShownValue = false;
  } else headerShownValue = true;
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
