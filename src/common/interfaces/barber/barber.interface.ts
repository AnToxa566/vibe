import { IBarbershop, IGraduation } from "../interfaces";

interface IBarber {
  id: number;
  name: string;
  imgPath: string;
  barbershop: IBarbershop;
  graduation: IGraduation;
}

export type { IBarber };
