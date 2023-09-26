import { IBarbershop, IGraduation, IResource, IService } from "../interfaces";

interface IPrice extends IResource {
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
