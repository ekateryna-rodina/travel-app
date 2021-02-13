import { createStore, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./rootReducer";
import { AppActionTypes } from "./rootActionTypes";

export type AppState = ReturnType<typeof rootReducer>;
const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppState, AppActionTypes>
);
export const travelStore = createStore(rootReducer, middleware);
