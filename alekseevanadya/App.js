import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./components/StackNavigation";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
