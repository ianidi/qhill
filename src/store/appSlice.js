import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  val: true,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    valToggle: (state) => {
      state.val = !state.val;
    },
  },
});

export const { valToggle } = appSlice.actions;

export const selectVal = (state) => state.app.val;

export default appSlice.reducer;
