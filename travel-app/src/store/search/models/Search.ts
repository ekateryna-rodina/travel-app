import { IHotelBase } from "./Hotel";

export interface IDates {
  startDate: string;
  endDate: string;
}
export interface ISearch {
  destination: string;
  type: "country" | "city";
  dates: IDates;
  guests: number;
}
export interface SearchResultState {
  // hotels?: IHotelBase[];
  dates: IDates;
}
