import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import moviesReducer from "../utils/moviesSlice";
import gptReducer from "../utils/gptSlice"; // Corrected this line
import configReducer from "./configSlice";

// Configure the Redux store
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools
});

export default appStore;
