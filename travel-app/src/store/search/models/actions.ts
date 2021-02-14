import { IHotelBase } from "./Hotel";

/*Search*/
export const SEARCH_SUCCESS: string = "SEARCH_SUCCESS";

interface SearchResultsAction {
  type: typeof SEARCH_SUCCESS;
  payload: IHotelBase[];
}

export type SearchActionTypes = SearchResultsAction;
