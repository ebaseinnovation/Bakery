import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  cartAlert: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    alertOn: (state) => {
      state.cartAlert = true;
    },
    alertOff: (state) => {
      state.cartAlert = false;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
  alertOn,
  alertOff,
} = counterSlice.actions;

export default counterSlice.reducer;
