import { IBarbershop, IGraduation, IService } from "../interfaces";

interface IPrice {
  id: number;
  value: number;
  service: IService;
  barbershop: IBarbershop;
  graduation: IGraduation;
}

export type { IPrice };
