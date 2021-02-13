import { Reducer } from "react";
import { Action } from "redux";
import {
  CommonActionTypes,
  FETCH_REQUEST,
  FETCH_FAILURE,
} from "./models/actions";
import { RequestState } from "./models/Common";

const initialState: RequestState = {
  loading: false,
  error: null,
};

export const commonReducer = (
  state = initialState,
  action: CommonActionTypes
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
