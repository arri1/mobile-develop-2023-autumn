import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations/navigation";

import { Provider } from "react-redux";
import store from "./src/redux";
import Toast from "react-native-toast-message";



const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Toast />
      </Provider>
  );
};

export default App;