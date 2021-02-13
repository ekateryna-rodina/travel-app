import { SEARCH_SUCCESS } from "./models/actions";
import { SearchActionTypes } from "./models/actions";
import { SearchResultState } from "./models/Search";
import { HotelBaseInterface } from "./models/Hotel";
import { Reducer } from "redux";
import { Action } from "redux";
const initialSearchState: SearchResultState = {
  hotels: [],
};

export const searchReducer = (
  state = initialSearchState,
  action: SearchActionTypes
): SearchResultState => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        hotels: action.payload,
      };
    default:
      return state;
  }
};

export default { searchReducer };
