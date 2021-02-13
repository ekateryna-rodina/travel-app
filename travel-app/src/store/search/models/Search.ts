import { HotelBaseInterface } from "./Hotel";

export interface SearchInterface {
  destination: string;
  type: "country" | "city";
  startDate: Date;
  endDate: Date;
  guests: number;
}
export interface SearchResultState {
  hotels?: HotelBaseInterface[];
}
