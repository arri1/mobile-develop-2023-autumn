import { createStore } from 'redux';
import counterReducer from './reducers'; // ваш корневой reducer

const store = createStore(counterReducer);

export default store;
