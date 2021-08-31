import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (_, thunkAPi) => {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    return data;
  }
);
export const fetchProduct = createAsyncThunk("fetch/product", async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return data;
});
const productSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: true,
    currentProduct: null,
    productItems: [],
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    toggleLoading: (state, action) => {
      state.isLoading = !state.isLoading;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.productItems = action.payload;
      state.isLoading = false;
    },
    [fetchProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setCurrentProduct, toggleLoading } = productSlice.actions;
export default productSlice.reducer;
