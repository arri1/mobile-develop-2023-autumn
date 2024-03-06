import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import FriendsScreen from "./FriendsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Определите вашу навигацию в компоненте App
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Friends" component={FriendsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;