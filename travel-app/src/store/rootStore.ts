import { createStore, applyMiddleware, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./rootReducer";
import { AppActionTypes } from "./rootActionTypes";
import { counterReducer } from "./counter/CounterReducer";

// const store = configureStore({ reducer: counterReducer })

export type AppState = ReturnType<typeof rootReducer>;
const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppState, AppActionTypes>
);

const store = configureStore({ reducer: rootReducer });

export default store;
