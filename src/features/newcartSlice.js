import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  // {
  //   id: 1,
  //   name: "",
  //   qty: 1,
  //   price: 10,
  //   amount: 0,
  // },
  // {
  //   id: 2,
  //   name: "Brown Bread",
  //   qty: 1,
  //   price: 20,
  //   amount: 0,
  // },
  // {
  //   id: 3,
  //   name: "Wheat Buscuit",
  //   qty: 1,
  //   price: 25,
  //   amount: 0,
  // },
];

const newcartSlice = createSlice({
  name: "newcart",
  initialState,
  reducers: {
    cartAdded(state, action) {
      state.push(action.payload);
    },
    productIncrement(state, action) {
      const { cartId, quantity } = action.payload;

      const existCart = state.find((incCart) => incCart.id === cartId);
      console.log(existCart.qty);
      if (existCart) {
        existCart.qty = existCart.qty + 1;
        existCart.amount = existCart.qty * existCart.price;
      }
    },
    productDecrement(state, action) {
      const { cartId, quantity } = action.payload;

      const existCart = state.find((incCart) => incCart.id === cartId);
      if (existCart) {
        if (existCart.qty > 0) existCart.qty = existCart.qty - 1;
        existCart.amount = existCart.qty * existCart.price;
      }
    },
  },
});

export const selectAllCarts = (state) => state.newcart;
export const { cartAdded, productIncrement, productDecrement } =
  newcartSlice.actions;
export default newcartSlice.reducer;
