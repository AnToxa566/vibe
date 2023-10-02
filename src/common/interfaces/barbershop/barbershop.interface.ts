import { IResource } from "../resource/resource.interface";

interface IBarbershop extends IResource {
  id: number;
  lat: number;
  lng: number;
  companyId: number;
  address: string;
  phoneNumbers: string[];
  schedule: string;
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
