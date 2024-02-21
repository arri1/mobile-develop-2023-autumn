import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigations/navigation";

import { Provider } from "react-redux";
import store from "./src/redux";



const App = () => {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
  );
};

export default App;