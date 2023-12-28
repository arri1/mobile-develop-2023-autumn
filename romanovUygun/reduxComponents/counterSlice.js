import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    increment100: (state) => {
      state.value += 100;
    },
    decrement100: (state) => {
      state.value -= 100;
    },
    decrement50: (state) => {
      state.value -= 50;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  increment100,
  decrement100,
  decrement50,
} = counterSlice.actions;

export default counterSlice.reducer;
