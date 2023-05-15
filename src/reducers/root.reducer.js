import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth.reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
});
