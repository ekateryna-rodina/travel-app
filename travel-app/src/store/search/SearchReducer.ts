import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
} from "../../helpers/constants";
import { SearchActionTypes } from "./models/actions";
import { SearchResultState } from "./models/Search";
const initialSearchState: SearchResultState = {
  hotels: [],
};

export const searchReducer = (
  state = initialSearchState,
  action: SearchActionTypes
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
        hotels: action.hotels,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action,
      };
    default:
      return state;
  }
};

export default { searchReducer };
