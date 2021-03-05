import { AppState } from "react-native";
import { Dispatch } from "redux";
import {
  OPEN_GALLERY,
  OPEN_HOTEL,
  OPEN_ROOM,
  SEARCH_FAIL,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SET_DATES,
  SET_LOCATION,
} from "./models/actions";
import { IHotelBase } from "./models/Hotel";
import { IDates, ILocation } from "./models/Search";

export const searchRequest = () => ({
  type: SEARCH_REQUEST,
});

export const searchFail = (error: any) => ({
  type: SEARCH_FAIL,
  payload: error,
});

export const searchSuccess = (results: IHotelBase[] = []) => ({
  type: SEARCH_SUCCESS,
  payload: results,
});

export const setDates = (dates: IDates) => ({
  type: SET_DATES,
  payload: dates,
});

export const setLocation = (location: ILocation) => ({
  type: SET_LOCATION,
  payload: location,
});

export const openHotel = (key: number | string) => ({
  type: OPEN_HOTEL,
  payload: key,
});

export const openRoom = (key: number | string) => ({
  type: OPEN_ROOM,
  payload: key,
});

export const openGallery = (images: number[]) => ({
  type: OPEN_GALLERY,
  payload: images,
});

// dispatchers
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

export function setSearchSuccess(results: any = []) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(searchSuccess(results));
  };
}

export function setOpenHotel(key: number | string) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(openHotel(key));
  };
}

export function setOpenRoom(key: number | string) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(openRoom(key));
  };
}

export function setGallery(images: number[]) {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(openGallery(images));
  };
}
