import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  ecommerceApi } from "../api";

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (q) => {
    const response = await ecommerceApi.get(
      `/api/products?populate=deep&filters[title][$contains]=${q}`
    );
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
export const {} = searchSlice.actions;