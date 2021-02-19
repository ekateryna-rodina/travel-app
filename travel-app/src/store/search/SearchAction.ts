import { ActionCreator, Dispatch } from "redux";
import { AppState } from "react-native";
import { IHotelBase } from "./models/Hotel";
import { AppActionTypes } from "../rootActionTypes";
import { SEARCH_SUCCESS, SET_DATES } from "./models/actions";
import { request } from "../common/request/RequesAction";
import { IDates } from "./models/Search";
// export const searchResults = (hotels: IHotelBase[]): AppActionTypes => ({
//   type: SEARCH_SUCCESS,
//   payload: hotels,
// });

export const setDates = (dates: IDates) => ({
  type: SET_DATES,
  payload: dates,
});

// export function searchHotels() {
//   return (dispatch: Dispatch, state: AppState) => {
//     dispatch(request());
//     dispatch(searchResults([]));
//   };
// }

export function setTravelDates(dates: IDates) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(setDates(dates));
  };
}
