import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./features/current_user_info";
import getAllShopsReducer from "./features/all_shops_slice";
import getTokenReducer from "./features/shopToken";
import getAllItemsReducer from "./features/get_all_items";
import getViewCardReducer from "./features/view_item";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
    shops: getAllShopsReducer,
    token: getTokenReducer,
    allItems: getAllItemsReducer,
    viewCaedData: getViewCardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
