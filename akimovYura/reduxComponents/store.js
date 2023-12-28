import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reduxComponents/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});