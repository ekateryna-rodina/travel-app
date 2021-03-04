import { Reducer } from "redux";
import { SEARCH_FAIL, SEARCH_REQUEST } from "../../helpers/constants";
import {
  OPEN_HOTEL,
  OPEN_ROOM,
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
  activeHotel: "",
  activeRoom: "",
};

export const searchReducer: Reducer<SearchResultState, SearchActionTypes> = (
  state = initialSearchState,
  action
) => {
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
    case OPEN_HOTEL:
      return {
        ...state,
        activeHotel: action.payload,
      };
    case OPEN_ROOM:
      return {
        ...state,
        activeRoom: action.payload,
      };
    default:
      return state;
  }
};

export default { searchReducer };
