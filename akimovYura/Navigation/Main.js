import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNav";
import Login from "../screens/Login";
import Splash from "../screens/Splash";
import Registration from "../screens/Registry";
const Stack = createStackNavigator();
import useAuth from "../hooks/useAuth";

const MainStackNavigation = () => {
  const { user } = useAuth();

  if (user) {
    headerShownValue = false;
  } else headerShownValue = true;
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: headerShownValue,
      })}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Registry" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabNav" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;