import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
  name: "color",
  initialState: { bgColor: "" },
  reducers: {
    setBgColor: (state, action) => {
      state.bgColor = action.payload;
    },
  },
});

export const { setBgColor } = colorSlice.actions;
export default colorSlice.reducer;
