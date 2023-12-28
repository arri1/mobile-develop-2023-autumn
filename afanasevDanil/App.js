import React from 'react';
import MainStackNavigation from "./navigations/MainStackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store } from './screens/store';
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigation/>
      </NavigationContainer>
    </Provider>
  );
}


