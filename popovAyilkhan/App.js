import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/mainNavigation";
import { ApolloProvider} from '@apollo/client'
import { Provider } from "react-redux";
import client from "./apollo/client";
import store from "./src/store";


export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </Provider>
    </ApolloProvider>
  );
}