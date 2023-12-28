import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./navigation/MainStackNavigation";
import { Provider } from "react-redux";
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
