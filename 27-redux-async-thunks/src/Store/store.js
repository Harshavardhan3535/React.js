import { configureStore } from "@reduxjs/toolkit";
import userDetailReducer from "../features/userDetailSlice";

const store = configureStore({
  reducer: {
    app: userDetailReducer,
  },
});

export default store;