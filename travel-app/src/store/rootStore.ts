import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActionTypes } from "./rootActionTypes";
import rootReducer from "./rootReducer";

// const store = configureStore({ reducer: counterReducer })

export type AppState = ReturnType<typeof rootReducer>;
const middleware = applyMiddleware(
  thunk as ThunkMiddleware<AppState, AppActionTypes>
);

// const store = configureStore({ reducer: rootReducer, middleware: middleware });
const store = createStore(rootReducer, {}, middleware);
export default store;
