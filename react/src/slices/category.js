import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ecommerceApi } from "../api"; // Assuming you have axios for making HTTP requests

// Async thunk for fetching ecommerce data
export const fetchBathroom = createAsyncThunk(
  "ecommerce/fetchBathroom",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=bathroom"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchBedroom = createAsyncThunk(
  "ecommerce/fetchBedroom",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=bedroom"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchLivingroom = createAsyncThunk(
  "ecommerce/fetchLivingroom",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=livingroom"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchKitchen = createAsyncThunk(
  "ecommerce/fetchKitchen",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=kitchen"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const ecommerceSlice = createSlice({
  name: "ecommerce",
  initialState: {
    data: [],
    bathroom: [],
    bedroom: [],
    livingroom: [],
    kitchen: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Additional synchronous actions can be defined here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBathroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBathroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bathroom = action.payload;
      })
      .addCase(fetchBathroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchBedroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBedroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bedroom = action.payload;
      })
      .addCase(fetchBedroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchLivingroom.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLivingroom.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.livingroom = action.payload;
      })
      .addCase(fetchLivingroom.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchKitchen.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchKitchen.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.kitchen = action.payload;
      })
      .addCase(fetchKitchen.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ecommerceSlice.reducer;
export const {
  /* additional synchronous action creators */
} = ecommerceSlice.actions;
