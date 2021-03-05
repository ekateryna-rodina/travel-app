import { IHotelBase } from "./Hotel";
import { IDates, ILocation } from "./Search";

/*Search*/
export const SEARCH_SUCCESS: string = "SEARCH_SUCCESS";
export const SEARCH_FAIL: string = "SEARCH_FAIL";
export const SEARCH_REQUEST: string = "SEARCH_REQUEST";
export const SET_DATES: string = "SET_DATES";
export const SET_LOCATION: string = "SET_LOCATION";
export const OPEN_GALLERY: string = "OPEN_GALLERY";

export const OPEN_HOTEL: string = "OPEN_HOTEL";
export const OPEN_ROOM: string = "OPEN_ROOM";

interface SearchResultsAction {
  type: typeof SEARCH_SUCCESS;
  payload: IHotelBase[];
}

interface SearchRequestAction {
  type: typeof SEARCH_REQUEST;
}

interface SearchFailAction {
  type: typeof SEARCH_FAIL;
  payload: any;
}

interface SetDatesAction {
  type: typeof SET_DATES;
  payload: IDates;
}

interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: ILocation;
}

interface OpenHotelAction {
  type: typeof OPEN_HOTEL;
  payload: number;
}

interface OpenRoomAction {
  type: typeof OPEN_ROOM;
  payload: number;
}
interface OpenGalleryAction {
  type: typeof OPEN_GALLERY;
  payload: number[];
}

export type SearchActionTypes =
  | SetDatesAction
  | SetLocationAction
  | SearchResultsAction
  | SearchRequestAction
  | OpenRoomAction
  | OpenHotelAction
  | OpenGalleryAction;
