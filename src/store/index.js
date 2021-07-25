import { combineReducers, createStore } from "@reduxjs/toolkit";

import noteReducer from "./reducers/noteReducer";

export default createStore(
  combineReducers({
    noteReducer,
  })
);
