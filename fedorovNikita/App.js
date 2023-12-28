import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./Login";
import Labs from "./screens/Labs";

import { Provider } from "react-redux";
import store from "./store.js";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Labs" component={Labs} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}