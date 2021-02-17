import { combineReducers } from "redux";
import modalReducer from "./common/modal/ModalReducer";
import { counterReducer } from "./counter/CounterReducer";
import { searchReducer } from "./search/SearchReducer";

// const rootReducer = combineReducers({ search: searchReducer });
const rootReducer = combineReducers({
  counter: counterReducer,
  modal: modalReducer,
});

export default rootReducer;
