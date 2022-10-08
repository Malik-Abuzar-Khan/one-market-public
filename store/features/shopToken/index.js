import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {},
};

export const tokenSlice = createSlice({
  name: "shopToken",
  initialState,
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
  },
});


export const { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;