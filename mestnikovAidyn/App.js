import MainStackNavigation from "./navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
