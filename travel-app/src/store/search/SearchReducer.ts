import { SEARCH_SUCCESS, SET_DATES } from "./models/actions";
import { SearchActionTypes } from "./models/actions";
import { IDates, SearchResultState } from "./models/Search";
import { IHotelBase } from "./models/Hotel";
import { Action, Reducer } from "redux";
import { AppActionTypes } from "../rootActionTypes";
const initialSearchState: SearchResultState = {
  // hotels: [],
  dates: { startDate: "", endDate: "" },
};

export const searchReducer: Reducer<SearchResultState, SearchActionTypes> = (
  state = initialSearchState,
  action
) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        hotels: action.payload,
      };
    case SET_DATES:
      return {
        ...state,
        dates: action.payload,
      };
    default:
      return state;
  }
};

export default { searchReducer };
