import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter_slice';
import userDataReducer from "./features/current_user_info";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userData: userDataReducer
  },
})

