import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./counter";

function Lab5() {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Счетчик</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default Lab5;
