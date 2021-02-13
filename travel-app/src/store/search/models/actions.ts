import { HotelBaseInterface } from "./Hotel";

/*Search*/
export const SEARCH_SUCCESS: string = "SEARCH_SUCCESS";

interface SearchResultsAction {
  type: typeof SEARCH_SUCCESS;
  payload: HotelBaseInterface[];
}

export type SearchActionTypes = SearchResultsAction;
