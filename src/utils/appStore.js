import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";

// Configure the Redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools
});

export default appStore;
