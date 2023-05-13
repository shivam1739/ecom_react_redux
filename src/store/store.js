import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/root.reducer";

const middleware = [thunk];

const store = configureStore(
  { reducer: rootReducer },
  applyMiddleware(...middleware)
);

export default store;
