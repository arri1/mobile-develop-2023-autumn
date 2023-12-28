import { createStore } from "redux";
import authReducer from "../reducers/reducer";

export const store = createStore(authReducer);
