import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ecommerceApi } from "../api";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await ecommerceApi.get(
      `/api/products/${id}?populate=deep`
    );

    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const {} = productSlice.actions;
