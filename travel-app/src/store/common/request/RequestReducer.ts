import { Reducer } from "react";
import { Action } from "redux";
import { AppActionTypes } from "../../rootActionTypes";
import {
  FetchActionTypes,
  FETCH_FAILURE,
  FETCH_REQUEST,
} from "./models/actions";
import { RequestState } from "./models/Request";

const initialRequestState: RequestState = {
  loading: false,
  error: null,
};

const requestReducer = (
  state = initialRequestState,
  action: FetchActionTypes
): RequestState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default requestReducer;
