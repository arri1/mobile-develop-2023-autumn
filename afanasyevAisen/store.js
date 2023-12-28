import { configureStore } from '@reduxjs/toolkit';

// Счетчик редьюсер
const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Настройка хранилища
const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
