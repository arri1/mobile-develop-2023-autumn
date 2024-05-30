import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/numSlice';

export default configureStore({
  reducer: {
    count: counterReducer,
  },
});
