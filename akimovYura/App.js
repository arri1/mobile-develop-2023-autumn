
import MainStackNavigation from "./Navigation/Main";
import { NavigationContainer } from "@react-navigation/native";
import store from "./reduxComponents/store";
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