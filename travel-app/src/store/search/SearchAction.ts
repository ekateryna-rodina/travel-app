import { ActionCreator, Dispatch } from "redux";
import { AppState } from "react-native";
import { IHotelBase } from "./models/Hotel";
import { AppActionTypes } from "../rootActionTypes";
import {
  SEARCH_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SET_DATES,
  SET_LOCATION,
} from "./models/actions";
import { request } from "../common/request/RequesAction";
import { IDates, ILocation } from "./models/Search";
// export const searchResults = (hotels: IHotelBase[]): AppActionTypes => ({
//   type: SEARCH_SUCCESS,
//   payload: hotels,
// });

export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const searchFail = (error: any) => ({
  type: SEARCH_FAIL,
  payload: error,
});

export const setDates = (dates: IDates) => ({
  type: SET_DATES,
  payload: dates,
});

export const setLocation = (location: ILocation) => ({
  type: SET_LOCATION,
  payload: location,
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

export function setTravelLocation(location: ILocation) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(setLocation(location));
  };
}

export function setSearchRequest() {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(searchRequest());
  };
}

export function setSearchFailure(error: any) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(searchFail(error));
  };
}
