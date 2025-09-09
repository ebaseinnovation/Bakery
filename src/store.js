import { configureStore } from "@reduxjs/toolkit";
// import { counterReducrer } from "./features/cartSlice";
import counterReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
