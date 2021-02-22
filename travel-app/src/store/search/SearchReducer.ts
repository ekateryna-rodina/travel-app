import { SEARCH_SUCCESS, SET_DATES, SET_LOCATION } from "./models/actions";
import { SearchActionTypes } from "./models/actions";
import { IDates, SearchResultState } from "./models/Search";
import { IHotelBase } from "./models/Hotel";
import { Action, Reducer } from "redux";
import { AppActionTypes } from "../rootActionTypes";
import { SEARCH_FAIL, SEARCH_REQUEST } from "../../helpers/constants";
const initialSearchState: SearchResultState = {
  // hotels: [],
  loading: false,
  error: null,
  dates: { startDate: "", endDate: "" },
  location: { locationKey: null, city: "", country: "" },
};

export const searchReducer: Reducer<SearchResultState, SearchActionTypes> = (
  state = initialSearchState,
  action
) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        loading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        hotels: action.payload,
      };
    case SEARCH_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case SET_DATES:
      return {
        ...state,
        dates: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        locations: action.payload,
      };
    default:
      return state;
  }
};

export default { searchReducer };
