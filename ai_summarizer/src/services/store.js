import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer:{},
  middleware:(getDefaultMiddleware)
})