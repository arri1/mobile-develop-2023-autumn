import { createStore } from "redux";

const initialState = {
  color: "white",
};

export const changeColor = (color) => ({
  type: "CHANGE_COLOR",
  payload: color,
});

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export const store = createStore(colorReducer);
