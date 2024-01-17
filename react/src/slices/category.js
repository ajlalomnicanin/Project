import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ecommerceApi } from "../api"; // Assuming you have axios for making HTTP requests

// Async thunk for fetching ecommerce data
export const fetchBestseller = createAsyncThunk(
  "ecommerce/fetchBestseller",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=bestseller"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchNewProducts = createAsyncThunk(
  "ecommerce/fetchNewProducts",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=back"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchDrons = createAsyncThunk("ecommerce/fetchDrons", async () => {
  try {
    const response = await ecommerceApi.get(
      "api/products?populate=categories,image&filters[categories][slug][$eq]=dronovi"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});
export const fetchCameras = createAsyncThunk(
  "ecommerce/fetchCameras",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=cameras"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
export const fetchAcessories = createAsyncThunk(
  "ecommerce/fetchAcessories",
  async () => {
    try {
      const response = await ecommerceApi.get(
        "api/products?populate=categories,image&filters[categories][slug][$eq]=acessories"
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
    bestseller: [],
    back: [],
    dronovi: [],
    cameras: [],
    acessories: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Additional synchronous actions can be defined here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBestseller.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBestseller.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bestseller = action.payload;
      })
      .addCase(fetchBestseller.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchNewProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNewProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.back = action.payload;
      })
      .addCase(fetchNewProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchDrons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDrons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dronovi = action.payload;
      })
      .addCase(fetchDrons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCameras.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cameras = action.payload;
      })
      .addCase(fetchCameras.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAcessories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAcessories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.acessories = action.payload;
      })
      .addCase(fetchAcessories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ecommerceSlice.reducer;
export const {
  /* additional synchronous action creators */
} = ecommerceSlice.actions;