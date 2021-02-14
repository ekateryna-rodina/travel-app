import { combineReducers } from "redux";
import { counterReducer } from "./counter/CounterReducer";
import { searchReducer } from "./search/SearchReducer";

// const rootReducer = combineReducers({ search: searchReducer });
const rootReducer = combineReducers({ counter: counterReducer });

export default rootReducer;
