import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const currentUserData = createSlice({
  name: "currentUserData",
  initialState,
  reducers: {
    newUserdataGetter: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { newUserdataGetter } = currentUserData.actions;
export default currentUserData.reducer;
