import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timezones: null,
  loading: true,
};

export const timezonesSlice = createSlice({
  name: "timezones",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    setTimezones: (state, action) => {
      state.loading = false;
      state.timezones = action.payload;
    },
  },
});

export const { loading, setTimezones } = timezonesSlice.actions;

export default timezonesSlice.reducer;
