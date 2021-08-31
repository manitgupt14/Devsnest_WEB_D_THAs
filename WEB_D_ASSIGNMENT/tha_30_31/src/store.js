import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import wishListSlice from "./slices/wishListSlice";
export const store = configureStore({
  reducer: { product: productSlice, cart: cartSlice, wishlist: wishListSlice },
});
