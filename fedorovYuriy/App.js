import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import MainStackNavigation from "./navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import store from "./redux/store";
import { Provider } from "react-redux";
const client = new ApolloClient({
  uri: "https://current--fedorovivt201s-team-06qdkb.apollographos.net/graphql",
  cache: new InMemoryCache(),
});
export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigation />
        </NavigationContainer>
        <Toast />
      </ApolloProvider>
    </Provider>
  );
}
