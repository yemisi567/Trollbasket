import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((x) => x.id === action.payload.id);
      let newCart;
      if (existingItem) {
        newCart = state.cart.map((item) =>
          item?.id === action.payload?.id
            ? { ...item, quantity: existingItem.quantity + 1 }
            : item
        );
      } else {
        newCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      state.cart = newCart;
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
        return item;
      });
    },

    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart, deleteFromCart } = cartSlice.actions;

export default cartSlice.reducer;
