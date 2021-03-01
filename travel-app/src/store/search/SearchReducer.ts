import { Reducer } from "redux";
import { SEARCH_FAIL, SEARCH_REQUEST } from "../../helpers/constants";
import {
  SearchActionTypes,
  SEARCH_SUCCESS,
  SET_DATES,
  SET_LOCATION,
} from "./models/actions";
import { SearchResultState } from "./models/Search";
const initialSearchState: SearchResultState = {
  hotels: null,
  loading: false,
  error: null,
  dates: { startDate: "", endDate: "" },
  guests: null,
  location: { locationKey: null, city: "", country: "" },
};

export const searchReducer: Reducer<SearchResultState, SearchActionTypes> = (
  state = initialSearchState,
  action
) => {
  console.warn(action.type);
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
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
        location: action.payload,
      };
    default:
      return state;
  }
};

export default { searchReducer };
