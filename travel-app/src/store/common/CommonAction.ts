import { ActionCreator } from "redux";
import { AppActionTypes } from "../rootActionTypes";
import { FETCH_FAILURE, FETCH_REQUEST } from "./models/actions";

export const request: ActionCreator<AppActionTypes> = () => ({
  type: FETCH_REQUEST,
});
export const failure: ActionCreator<AppActionTypes> = (err: any) => ({
  type: FETCH_FAILURE,
  payload: err,
});
