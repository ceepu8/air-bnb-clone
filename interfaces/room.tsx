import { Location } from "./locations";

export default interface Room {
  deleteAt: boolean;
  _id: string;
  name: string;
  description: string;
  __v: number;
  image: string;
  cableTV: boolean;
  dryer: boolean;
  elevator: boolean;
  gym: boolean;
  heating: boolean;
  kitchen: boolean;
  pool: boolean;
  wifi: boolean;
  bath: number;
  bedRoom: number;
  price: number;
  locationId: Location;
  guests: number;
  hotTub: boolean;
  indoorFireplace: boolean;
}
