import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
export const store = configureStore({
  reducer: { user: userReducer },
  //to avoid serial errors
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
