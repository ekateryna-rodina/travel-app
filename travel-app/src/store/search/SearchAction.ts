import { ActionCreator, Dispatch } from "redux";
import { AppState } from "react-native";
import { IHotelBase } from "./models/Hotel";
import { AppActionTypes } from "../rootActionTypes";
import { SEARCH_SUCCESS } from "./models/actions";
import { request } from "../common/request/RequesAction";
export const searchResults = (hotels: IHotelBase[]): AppActionTypes => ({
  type: SEARCH_SUCCESS,
  payload: hotels,
});

export function searchHotels() {
  return (dispatch: Dispatch, state: AppState) => {
    dispatch(request());
    dispatch(searchResults([]));
  };
}
