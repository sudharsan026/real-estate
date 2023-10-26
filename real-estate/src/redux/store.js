import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userReducer });
const persistConfig = {
  key: "root", //name of our storage key - inspect and go to application to see the saved user
  storage,
  version: 1,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  //to avoid serial errors
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
