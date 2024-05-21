/* eslint-disable default-param-last */
import { createStore, combineReducers } from 'redux';

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return { ...state, authenticated: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
