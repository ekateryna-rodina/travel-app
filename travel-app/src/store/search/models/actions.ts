import { HotelBaseInterface } from "./Hotel";

/*Search*/
export const SEARCH_SUCCESS: string = "SEARCH_SUCCESS";

interface SearchResultsAction {
  type: typeof SEARCH_SUCCESS;
  hotels: HotelBaseInterface[];
}

export type SearchActionTypes = SearchResultsAction;
