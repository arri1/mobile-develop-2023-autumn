import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../screens/Lab5reducer';

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;