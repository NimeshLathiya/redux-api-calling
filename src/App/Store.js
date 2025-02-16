import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "../Features/ApiSlice";

export const Store = configureStore({
  reducer: {
    app: ApiSlice,
  },
});
