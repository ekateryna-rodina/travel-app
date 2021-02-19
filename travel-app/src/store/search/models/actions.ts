import { IHotelBase } from "./Hotel";
import { IDates } from "./Search";

/*Search*/
export const SEARCH_SUCCESS: string = "SEARCH_SUCCESS";
export const SET_DATES: string = "SET_DATES";

interface SearchResultsAction {
  type: typeof SEARCH_SUCCESS;
  payload: IHotelBase[];
}

interface SetDatesAction {
  type: typeof SET_DATES;
  payload: IDates;
}

export type SearchActionTypes = SetDatesAction;
