import { ActionCreator, Dispatch } from "redux";
import { AppState } from "react-native";
import { HotelBaseInterface } from "./models/Hotel";
import { AppActionTypes } from "../rootActionTypes";
import { SEARCH_SUCCESS } from "./models/actions";
import { request } from "../common/CommonAction";
export const searchResults = (
  hotels: HotelBaseInterface[]
): AppActionTypes => ({
  type: SEARCH_SUCCESS,
  payload: hotels,
});

export function searchHotels() {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(request());
    dispatch(searchResults([]));
  };
}
