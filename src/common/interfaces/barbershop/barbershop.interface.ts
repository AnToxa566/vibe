/* eslint-disable import/no-cycle */
import { IBarber } from "../barber/barber.interface";
import { IPrice } from "../price/price.interface";
import { IResource } from "../resource/resource.interface";

interface IBarbershop extends IResource {
  id: number;
  lat: number;
  lng: number;
  companyId: number;
  address: string;
  phoneNumbers: string[];
  schedule: string;
  barbers: IBarber[];
  prices: IPrice[];
}

interface ICreateBarbershop {
  lat: number;
  lng: number;
  companyId: number;
  address: string;
  phoneNumbers: string[];
  schedule: string;
}

export type { IBarbershop, ICreateBarbershop };
