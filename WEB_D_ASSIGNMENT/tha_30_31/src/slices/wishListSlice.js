import { createSlice } from "@reduxjs/toolkit";
const wishListSlice = createSlice({
  name: "cart",
  initialState: {
    wishListItems: {},
  },
  reducers: {
    addItemWishlist: (state, action) => {
      console.log(action);
      state.wishListItems[action.payload.currentState.id + "xd"] =
        action.payload.currentState;
    },
    removeItemWishlist: (state, action) => {
      delete state.wishListItems[action.payload];
    },
  },
});

export const { addItemWishlist, removeItemWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
