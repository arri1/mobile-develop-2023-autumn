import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slicecount";

export default configureStore({
  reducer: {
    count: counterReducer,
  },
});
