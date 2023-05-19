import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth.reducer";
import { categoryReducer } from "./category.reducer";

export const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
});
