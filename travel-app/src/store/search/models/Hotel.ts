export interface City {
  key: number;
  name: string;
  country: string;
  description: string;
  image: number;
}

export interface IHotelBase {
  key: number;
  name: string;
  country: string;
  city: string;
  type: "Hotel" | "Hostel";
  rating: number;
}

export interface IRoom {
  key: number;
  type: "family" | "single";
  amenities: string[];
  price: number;
  images: number[];
}

export interface IHotelDetails extends IHotelBase {
  minPrice: number;
  images: number[];
  geoLocation: [];
  address: string;
  phone: string;
  rooms: IRoom[];
  description: string;
  moto?: string;
  reviews?: [{}];
  policies: {};
}

export interface IActivity {
  name: string;
  image: 1;
  description: string;
  locationName: string;
}
