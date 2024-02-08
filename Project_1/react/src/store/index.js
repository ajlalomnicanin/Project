import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../slices/products";
import categoryReducer from "../slices/category";
import searchReducer from "../slices/search";
const store = configureStore({
  reducer: {
    products: productsReducer,
    search: searchReducer,
    category: categoryReducer,
  },
});

export default store;
