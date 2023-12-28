import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../Screens/Settings";
import ChangeEmail from "../Screens/changemail";
import ChangePassword from "../Screens/changepsw";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const SettingsNavigation = () => {
  const nav = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;
