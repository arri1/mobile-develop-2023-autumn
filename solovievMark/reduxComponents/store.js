import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reduxComponents/reduxCounter";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
