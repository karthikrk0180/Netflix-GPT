import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice"

// Configure the Redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools
});

export default appStore;
