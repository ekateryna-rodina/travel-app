export interface City {
  key: number;
  name: string;
  country: string;
  description: string;
  image: number;
}

export interface HotelBaseInterface {
  key: number;
  name: string;
  country: string;
  city: string;
  type: "Hotel" | "Hostel";
  rating: number;
}

export interface Room {
  key: number;
  type: "family" | "single";
  amenities: string[];
  price: number;
  images: number[];
}

export interface HotelDetails extends HotelBaseInterface {
  minPrice: number;
  images: number[];
  geoLocation: [];
  address: string;
  phone: string;
  rooms: Room[];
  description: string;
  moto?: string;
  reviews?: [{}];
  policies: {};
}

export interface Activity {
  name: string;
  image: 1;
  description: string;
  locationName: string;
}
