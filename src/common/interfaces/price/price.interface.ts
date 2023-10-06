/* eslint-disable import/no-cycle */
import { IBarbershop } from "../barbershop/barbershop.interface";
import { IGraduation } from "../graduation/graduation.interface";
import { IResource } from "../resource/resource.interface";
import { IService } from "../service/service.interface";

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
