import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    posts: postsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
