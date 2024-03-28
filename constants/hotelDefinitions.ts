export enum ServicesEnum {
  WIFI = "WIFI",
  GYM = "GYM",
  POOL = "POOL",
  BREAKFAST = "BREAKFAST",
  TRANSPORTATION = "TRANSPORTATION",
  SPA = "SPA",
  RESTAURANT = "RESTAURANT",
}

export type Hotel = {
  id: string;
  name: string;
  description: string;
  image: string;
  rate: string;
  services: ServicesEnum[];
  available_rooms: string;
  all_inclusive: boolean;
  price_per_night: number;
};

export type Services = {
  wifi: boolean;
  gym: boolean;
  pool: boolean;
  breakfast: boolean;
  transportation: boolean;
  spa: boolean;
  restaurant: boolean;
};

export type HotelData = {
  data: Hotel[];
};
