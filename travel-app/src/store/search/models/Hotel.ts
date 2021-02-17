export interface ICity {
  key: number;
  name: string;
  country: string;
  description?: string;
  image: number;
  continent?: string;
  isHero?: boolean;
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
  type: string;
  images: number[];
  price: number;
  amenities: string[];
  description: string;
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
  key: string;
  name: string;
  city: string;
  country: string;
  description: string;
  price: number;
  image: number;
}
