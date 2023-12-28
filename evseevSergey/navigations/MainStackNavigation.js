import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "./DrawerNavigation";
import RegistrationScreen from "../screens/Registration";
const Stack = createStackNavigator();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Drawer" component={DrawerNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
