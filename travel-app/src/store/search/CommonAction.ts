// import { FETCH_REQUEST, FETCH_FAILURE, AppActionTypes } from "../types/actions";
import { ActionCreator } from "redux";
import { FETCH_FAILURE, FETCH_REQUEST } from "../common/models/actions";
import { AppActionTypes } from "../rootActionTypes";

export const request: ActionCreator<AppActionTypes> = () => {
  return { type: FETCH_REQUEST };
};
export const failure: ActionCreator<AppActionTypes> = (err: any) => {
  return { type: FETCH_FAILURE, error: err };
};
