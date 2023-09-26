import { IBarbershop, IGraduation, IService } from "../interfaces";

interface IPrice {
  id: number;
  value: number;
  service: IService;
  barbershop: IBarbershop;
  graduation: IGraduation;
}

interface ICreatePrice {
  value: number;
  service: { id: number };
  barbershop: { id: number };
  graduation: { id: number };
}

export type { IPrice, ICreatePrice };
