import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  val: true,
  wallet: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    valToggle: (state) => {
      state.val = !state.val;
    },
    setWallet: (state, action) => {
      state.wallet = action.payload;
    },
  },
});

export const { valToggle, setWallet } = appSlice.actions;

export const selectVal = (state) => state.app.val;
export const selectWallet = (state) => state.app.wallet;

export default appSlice.reducer;
