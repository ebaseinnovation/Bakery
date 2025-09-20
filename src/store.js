import { configureStore } from "@reduxjs/toolkit";
// import { counterReducrer } from "./features/cartSlice";
import counterReducer from "./features/cartSlice";
import newcartReducer from "./features/newcartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    newcart: newcartReducer,
  },
});
