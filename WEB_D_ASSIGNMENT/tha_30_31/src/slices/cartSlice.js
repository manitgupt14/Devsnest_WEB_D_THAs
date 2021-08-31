import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isVisible: false,
    cartItems: {},
  },
  reducers: {
    addItemCart: (state, action) => {
      state.cartItems[action.payload.id + "xd"] = action.payload;
    },
    removeItemCart: (state, action) => {
      delete state.cartItems[action.payload];
    },
    updateQuantity: (state, action) => {
      console.log(action);
      console.log(action.payload.id);
      state.cartItems[action.payload.id].quantity = action.payload.value;
    },
    toggleVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { addItemCart, removeItemCart, toggleVisible, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
