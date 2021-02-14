import { IHotelBase } from "./Hotel";

export interface ISearch {
  destination: string;
  type: "country" | "city";
  startDate: Date;
  endDate: Date;
  guests: number;
}
export interface SearchResultState {
  hotels?: IHotelBase[];
}
