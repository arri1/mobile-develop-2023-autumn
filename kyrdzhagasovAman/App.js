import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigation from "./navigator/MainStackNavigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import authReducer from "./reducers/authReducer";

const store = createStore(authReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
