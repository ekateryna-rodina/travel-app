// import { FETCH_REQUEST, FETCH_FAILURE, AppActionTypes } from "../types/actions";
// import { ActionCreator } from "redux";

// export const request: ActionCreator<AppActionTypes> = () => {
//   return { type: FETCH_REQUEST };
// };
// export const failure: ActionCreator<AppActionTypes> = (err: any) => {
//   return { type: FETCH_FAILURE, error: err };
// };

// import { FETCH_REQUEST, FETCH_FAILURE, AppActionTypes } from "../types/actions";
// import { ActionCreator } from "redux";

// export const request: ActionCreator<AppActionTypes> = () => {
//   return { type: FETCH_REQUEST };
// };
// export const failure: ActionCreator<AppActionTypes> = (err: any) => {
//   return { type: FETCH_FAILURE, error: err };
// };

/*Common*/
export const FETCH_REQUEST = "FETCH_REQUEST";
export const FETCH_FAILURE = "FETCH_FAILURE";

interface FetchRequestAction {
  type: typeof FETCH_REQUEST;
}

interface FetchFailureAction {
  type: typeof FETCH_FAILURE;
  error: any;
}

export type FetchCommonActionTypes = FetchRequestAction | FetchFailureAction;
