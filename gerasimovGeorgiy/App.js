import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import MainStackNavigation from "./navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
const client = new ApolloClient({
  uri: "http://194.59.247.134:1414/",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainStackNavigation />
      </NavigationContainer>
      <Toast />
    </ApolloProvider>
  );
}
