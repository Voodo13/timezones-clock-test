import { configureStore } from "@reduxjs/toolkit";
import timezonesReducer from "./timezonesSlice";

export const appStore = configureStore({
  reducer: {
    timezones: timezonesReducer,
  },
});
