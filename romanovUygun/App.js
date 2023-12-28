import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import MainStackNavigation from "./navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import store from "./reduxComponents/store";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "http://194.59.247.134:1414/",
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </Provider>
  );
}
