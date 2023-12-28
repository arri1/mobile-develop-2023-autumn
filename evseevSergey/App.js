import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigation from "./navigations/MainStackNavigation";
import DrawerNavigation from "./navigations/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: "http://192.168.0.4:4000/graphql",
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <View>
          <StatusBar backgroundColor="rgb(217,217,217)" />
        </View>
        <DrawerNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
  r;
}
