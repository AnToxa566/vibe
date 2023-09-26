import { IBarbershop, IGraduation, IResource } from "../interfaces";

interface IBarber extends IResource {
  id: number;
  name: string;
  imgPath: string;
  barbershop: IBarbershop;
  graduation: IGraduation;
}

export type { IBarber };
