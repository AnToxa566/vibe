import { IBarbershop } from "../barbershop/barbershop.interface";
import { IGraduation } from "../graduation/graduation.interface";
import { IResource } from "../resource/resource.interface";

interface IBarber extends IResource {
  id: number;
  name: string;
  imgPath: string;
  barbershop: IBarbershop;
  graduation: IGraduation;
}

export type { IBarber };
